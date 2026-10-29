// ==========================================================
// Bilal Panoli Salon — JavaScript
// Part 3: Interactivity, Form Validation, Dynamic Content
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    initScrollAnimations();
    initFaqAccordion();
    initGalleryLightbox();
    initServiceFilter();
    initEnquiryForm();
    initContactForm();
    initLeafletMaps();

});


/* ==========================================================
   1. Scroll Animations
   Fades and slides each <section> into view as the user
   scrolls down the page, using the Intersection Observer API.
   ========================================================== */
function initScrollAnimations() {

    const sections = document.querySelectorAll("main section");
    if (!sections.length) return;

    sections.forEach(section => section.classList.add("fade-in-section"));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => observer.observe(section));
}


/* ==========================================================
   2. FAQ Accordion (about.html)
   Custom-built accordion using JavaScript, not the native
   <details> element, with ARIA attributes kept in sync for
   accessibility.
   ========================================================== */
function initFaqAccordion() {

    const faqItems = document.querySelectorAll(".faq-item");
    if (!faqItems.length) return;

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", () => {
            const isOpen = item.classList.contains("open");

            // Close any other open items (accordion behaviour)
            faqItems.forEach(other => {
                other.classList.remove("open");
                other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
                other.querySelector(".faq-answer").style.maxHeight = null;
            });

            if (!isOpen) {
                item.classList.add("open");
                question.setAttribute("aria-expanded", "true");
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
}


/* ==========================================================
   3. Gallery Lightbox (services.html)
   Clicking a gallery thumbnail opens it enlarged in a modal
   overlay. Closes on the X button, overlay click, or Escape.
   ========================================================== */
function initGalleryLightbox() {

    const galleryImages = document.querySelectorAll(".gallery-grid img");
    const lightbox = document.getElementById("lightbox");
    if (!galleryImages.length || !lightbox) return;

    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeBtn = document.getElementById("lightbox-close");

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.classList.add("open");
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxCaption.textContent = img.alt;
            document.body.style.overflow = "hidden"; // prevent background scroll
        });
    });

    function closeLightbox() {
        lightbox.classList.remove("open");
        document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closeLightbox);

    // Close when clicking the dark overlay itself, not the image
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
    });
}


/* ==========================================================
   4. Dynamic Service Search / Filter (services.html)
   Filters the pricing tables live as the user types, and
   dynamically shows/hides whole category sections when no
   rows inside them match.
   ========================================================== */
function initServiceFilter() {

    const searchInput = document.getElementById("service-search");
    if (!searchInput) return;

    const categories = document.querySelectorAll(".service-category");
    const noResultsMsg = document.getElementById("no-results-message");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        let totalVisible = 0;

        categories.forEach(category => {
            const rows = category.querySelectorAll("tbody tr");
            let visibleInCategory = 0;

            rows.forEach(row => {
                const serviceName = row.querySelector("td").textContent.toLowerCase();
                const matches = serviceName.includes(query);
                row.style.display = matches ? "" : "none";
                if (matches) visibleInCategory++;
            });

            category.style.display = visibleInCategory > 0 ? "" : "none";
            totalVisible += visibleInCategory;
        });

        if (noResultsMsg) {
            noResultsMsg.style.display = totalVisible === 0 ? "block" : "none";
        }
    });
}


/* ==========================================================
   5. Enquiry Form — Validation + Simulated Processed Response
   ========================================================== */
function initEnquiryForm() {

    const form = document.getElementById("enquiry-form");
    if (!form) return;

    const responseBox = document.getElementById("enquiry-response");

    // Approximate price list used to generate the response message.
    // Keep this in sync with the pricing table on services.html.
    const servicePrices = {
        "classic-haircut": { label: "Classic Haircut", price: 150 },
        "skin-fade": { label: "Skin Fade", price: 180 },
        "beard-trim": { label: "Beard Trim & Shape", price: 90 },
        "hot-towel-shave": { label: "Traditional Hot Towel Shave", price: 160 },
        "full-package": { label: "Full Package (Cut, Beard & Style)", price: 320 }
    };

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearErrors(form);

        let isValid = true;

        isValid = validateField("full-name", v => v.trim().length >= 2,
            "Please enter your full name (at least 2 characters).") && isValid;

        isValid = validateField("email", v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
            "Please enter a valid email address.") && isValid;

        isValid = validateField("phone", v => /^[0-9]{10}$/.test(v),
            "Please enter a valid 10-digit phone number, e.g. 0821234567.") && isValid;

        isValid = validateField("service", v => v !== "",
            "Please select a service.") && isValid;

        isValid = validateField("date", v => v !== "" && new Date(v) >= new Date(new Date().toDateString()),
            "Please choose today's date or a date in the future.") && isValid;

        isValid = validateField("time", v => v !== "",
            "Please choose a preferred time.") && isValid;

        if (!isValid) {
            if (responseBox) {
                responseBox.textContent = "Please fix the highlighted fields above and try again.";
                responseBox.className = "form-response error";
            }
            return;
        }

        // Simulate asynchronous (AJAX-style) processing before
        // showing the result, since there is no live backend yet.
        if (responseBox) {
            responseBox.textContent = "Checking availability…";
            responseBox.className = "form-response loading";
        }

        const serviceValue = document.getElementById("service").value;
        const chosenDate = document.getElementById("date").value;
        const chosenTime = document.getElementById("time").value;
        const chosenBarber = document.getElementById("barber").value;

        setTimeout(() => {
            const service = servicePrices[serviceValue];
            const barberText = chosenBarber === "no-preference"
                ? "any available barber"
                : document.getElementById("barber").selectedOptions[0].textContent;

            if (responseBox) {
                responseBox.textContent =
                    `Thanks! Your ${service.label} is estimated at R${service.price}. ` +
                    `We've noted your preference for ${barberText} on ${chosenDate} at ${chosenTime}. ` +
                    `A confirmation will be sent to your email shortly.`;
                responseBox.className = "form-response success";
            }

            form.reset();
        }, 800);
    });
}


/* ==========================================================
   6. Contact Form — Validation + Simulated Email Send
   Builds a mailto: link from the validated form data so the
   visitor's own email client sends the message to the salon.
   ========================================================== */
function initContactForm() {

    const form = document.getElementById("contact-form");
    if (!form) return;

    const responseBox = document.createElement("div");
    responseBox.id = "contact-response";
    responseBox.setAttribute("aria-live", "polite");
    form.appendChild(responseBox);

    // Update this to the salon's real inbox once it exists.
    const salonEmail = "info@bilalpanolisalon.co.za";

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearErrors(form);

        let isValid = true;

        isValid = validateField("c-full-name", v => v.trim().length >= 2,
            "Please enter your full name (at least 2 characters).") && isValid;

        isValid = validateField("c-email", v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
            "Please enter a valid email address.") && isValid;

        const phoneField = document.getElementById("c-phone");
        if (phoneField.value.trim() !== "" && !/^[0-9]{10}$/.test(phoneField.value.trim())) {
            showError("c-phone", "Please enter a valid 10-digit phone number, or leave this blank.");
            isValid = false;
        }

        isValid = validateField("message-type", v => v !== "",
            "Please select a message type.") && isValid;

        isValid = validateField("message", v => v.trim().length >= 10,
            "Your message should be at least 10 characters long.") && isValid;

        if (!isValid) {
            responseBox.textContent = "Please fix the highlighted fields above and try again.";
            responseBox.className = "form-response error";
            return;
        }

        const name = document.getElementById("c-full-name").value.trim();
        const email = document.getElementById("c-email").value.trim();
        const phone = phoneField.value.trim() || "Not provided";
        const type = document.getElementById("message-type").selectedOptions[0].textContent;
        const message = document.getElementById("message").value.trim();

        responseBox.textContent = "Preparing your message…";
        responseBox.className = "form-response loading";

        // Simulated AJAX delay before compiling the email.
        setTimeout(() => {
            const subject = `New ${type} from ${name}`;
            const body =
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Phone: ${phone}\n` +
                `Message Type: ${type}\n\n` +
                `Message:\n${message}`;

            const mailtoLink =
                `mailto:${salonEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            responseBox.innerHTML =
                `Thanks, ${name.split(" ")[0]}! Your message is ready to send. ` +
                `<a href="${mailtoLink}">Click here to send it via your email app</a> if it doesn't open automatically.`;
            responseBox.className = "form-response success";

            window.location.href = mailtoLink;
            form.reset();
        }, 800);
    });
}


/* ----------------------------------------------------------
   Shared form-validation helpers
   ---------------------------------------------------------- */
function validateField(id, testFn, message) {
    const field = document.getElementById(id);
    if (!field) return true;

    if (!testFn(field.value)) {
        showError(id, message);
        return false;
    }
    return true;
}

function showError(id, message) {
    const field = document.getElementById(id);
    if (!field) return;

    field.classList.add("invalid");

    let errorEl = document.getElementById(id + "-error");
    if (!errorEl) {
        errorEl = document.createElement("small");
        errorEl.id = id + "-error";
        errorEl.className = "field-error";
        field.insertAdjacentElement("afterend", errorEl);
    }
    errorEl.textContent = message;
}

function clearErrors(form) {
    form.querySelectorAll(".invalid").forEach(field => field.classList.remove("invalid"));
    form.querySelectorAll(".field-error").forEach(el => el.remove());
}


/* ==========================================================
   7. Interactive Maps (contact.html)
   Uses Leaflet.js (free, no API key) with OpenStreetMap tiles
   to show two markers for the salon's two branches.
   ========================================================== */
function initLeafletMaps() {

    const mainMapEl = document.getElementById("map-main");
    const secondMapEl = document.getElementById("map-second");
    if (!mainMapEl || !secondMapEl || typeof L === "undefined") return;

    // Replace these coordinates with the salon's real branch locations.
    const mainBranch = { lat: -26.2041, lng: 28.0473, name: "Bilal Panoli Salon — City Centre" };
    const secondBranch = { lat: -26.1715, lng: 28.0578, name: "Bilal Panoli Salon — Suburb Mall" };

    // CARTO map tiles: free to use and not blocked when opened from a local file
    const tileUrl = "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
    const tileOptions = {
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
        subdomains: "abcd",
        maxZoom: 19
    };

    const mainMap = L.map("map-main").setView([mainBranch.lat, mainBranch.lng], 15);
    L.tileLayer(tileUrl, tileOptions).addTo(mainMap);
    L.marker([mainBranch.lat, mainBranch.lng]).addTo(mainMap)
        .bindPopup(mainBranch.name).openPopup();

    const secondMap = L.map("map-second").setView([secondBranch.lat, secondBranch.lng], 15);
    L.tileLayer(tileUrl, tileOptions).addTo(secondMap);
    L.marker([secondBranch.lat, secondBranch.lng]).addTo(secondMap)
        .bindPopup(secondBranch.name).openPopup();
}