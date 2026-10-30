# Bilal Panoli Salon — Website Project

## Student Information
- **Name:** Iqbal Sirkhot
- **Student Number:** ST10514804
- **Module:** Web Development (Introduction) — WEDE5020
- **Assessment:** Portfolio of Evidence (PoE), Parts 1 to 3

## Live Website and Repository
- **Live website (Netlify):** https://charming-conkies-a30427.netlify.app
- **GitHub repository:** https://github.com/roseintstudent/Bilal-Panoli-Salon-Website

## Project Overview
Bilal Panoli Salon is an independently owned barbershop offering traditional and modern grooming services to men in its local community. The salon has built its client base through word-of-mouth and repeat custom, but has no online presence beyond WhatsApp.

This project delivers a responsive, SEO-optimised website for the salon, built in three parts:

| Part | Focus | Status |
|------|-------|--------|
| Part 1 | HTML structure, content, navigation and project setup | Complete |
| Part 2 | CSS styling and responsive design | Complete |
| Part 3 | JavaScript functionality, SEO and deployment | Complete |

## Website Goals and Objectives
- Build a professional online presence that establishes trust with new and existing clients.
- Let clients view services, pricing and opening hours without calling or messaging.
- Make booking enquiries easier through an online form.
- Improve visibility on Google through on-page SEO.

**Key Performance Indicators (KPIs):**
- 300+ monthly website visits within 3 months of launch
- 20% increase in new bookings within 6 months
- Page load time under 3 seconds

## Target Audience
Men aged 16 to 55 in the surrounding community, including working professionals and students who need regular haircuts, beard trims and shaves.

## Key Features and Functionality
- **Homepage** with a hero image, introduction, highlights and calls to action
- **About Us** with the salon's story, mission and vision, team, and an interactive FAQ accordion
- **Services** with pricing tables, a live search filter, and an image gallery with a lightbox
- **Enquiry (booking)** form with validation and a processed response showing an estimated cost
- **Contact** page with business details, opening hours, two interactive maps and a validated contact form
- White and gold visual theme, sticky navigation and a fully responsive layout (desktop, tablet, mobile)

## Timeline and Milestones
| Week | Milestone |
|------|-----------|
| Week 1 | Research, wireframing and content gathering |
| Week 2 | Visual design and homepage/services development |
| Week 3 | Booking form integration and mobile optimisation |
| Week 4 | Testing and client feedback |
| Week 5 | Final proofreading and launch |

## Sitemap
```
Home (index.html)
├── About Us (about.html)
├── Services (services.html)
├── Book Now (enquiry.html)
└── Contact (contact.html)
```

## File and Folder Structure
```
Bilal-Panoli-Salon-Website/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── hero-barbershop.jpg
    ├── barber-1.jpg
    ├── barber-2.jpg
    ├── work-1.jpg to work-4.jpg
    └── screenshots/
```

---

## Part 1 Details — HTML Structure and Content
- Five pages built with semantic HTML5 elements (`header`, `nav`, `main`, `section`, `article`, `footer`).
- A consistent navigation menu links all pages.
- Content includes headings, paragraphs, lists, tables, images and links.
- Two forms: a booking enquiry form (`enquiry.html`) and a general contact form (`contact.html`).
- Code is indented and commented to explain each section.
- Two project proposals were submitted for lecturer approval before this proposal was chosen.

## Part 2 Details — CSS Styling and Responsive Design
- External stylesheet (`css/style.css`) linked to every page, using a CSS reset and CSS variables for the white and gold colour scheme.
- Typography: heading scale, line height and letter spacing set for readability.
- Layout: Flexbox for the header and navigation, CSS Grid for cards, galleries and maps.
- Visual styling: colours, borders and box-shadows, with `:hover`, `:focus` and `:active` states on links, buttons, gallery images and form fields.
- Responsive design with two breakpoints (tablet `768px`, mobile `480px`), using relative units (`rem`, `%`, `vh`).
- On small screens the pricing tables stack into labelled cards, and the navigation and images adjust to fit.
- Images use `max-width: 100%` with `object-fit` so they scale with the screen.

### Responsive Screenshots
| Device | Screenshot |
|--------|-----------|
| Desktop | ![Desktop view](images/screenshots/desktop.png) |
| Tablet | ![Tablet view](images/screenshots/tablet.png) |
| Mobile | ![Mobile view](images/screenshots/mobile.png) |

## Part 3 Details — Functionality, SEO and Deployment

### Interactive Elements
- **FAQ accordion** (`about.html`): custom JavaScript accordion with `aria-expanded` kept in sync for accessibility.
- **Gallery lightbox** (`services.html`): clicking a gallery image opens it enlarged. It closes with the X button, an overlay click or the Escape key.
- **Scroll animations:** page sections fade in as they scroll into view, using the Intersection Observer API and CSS transitions.
- **Interactive maps** (`contact.html`): two Leaflet.js maps with markers and popups for the two branches.

### Dynamic Content and Search
- **Service search** (`services.html`): the pricing tables filter live as the visitor types. Categories with no matches are hidden, and a "no results" message appears when nothing matches.

### Forms and Validation
- **Enquiry form:** JavaScript validates name, email, 10-digit phone number, service, date (today or later) and time. Errors show beside each field. A valid submission shows an estimated cost and confirms the chosen barber, date and time.
- **Contact form:** validates the same details plus message type and message length. A valid submission compiles the details into an email that the visitor sends to the salon address through their own email app (`mailto:`).
- Both forms simulate an asynchronous (AJAX-style) delay before responding.

### SEO
- Unique `<title>`, meta description and meta keywords on every page.
- Logical heading hierarchy (`h1` to `h4`) on every page.
- Descriptive image file names and alt text, with `loading="lazy"` on below-the-fold images.
- Clean, descriptive page URLs and internal links between all pages.
- Mobile-friendly responsive design.
- `robots.txt` and `sitemap.xml` in the project root.
- Page speed: deferred JavaScript, lazy-loaded images and no large external dependencies.

### Security
- All form input is validated on the client before use.
- External links use `rel="noopener"`.
- The deployed site is served over HTTPS by Netlify.

### Deployment
The site is deployed on Netlify: https://charming-conkies-a30427.netlify.app

### Known Limitations
- The forms have no server-side backend, so processing is simulated in the browser and the contact form sends mail through the visitor's own email app.
- Contact details, branch addresses and map coordinates are sample data for a fictional client.

---

## Changelog
| Date | Change |
|------|--------|
| [DD Month 2026] | Initial repository setup and file/folder structure (css, js, images) |
| [DD Month 2026] | Built `index.html`: hero, introduction, highlights and call to action |
| [DD Month 2026] | Built `about.html`: story, mission and vision, team and audience |
| [DD Month 2026] | Built `services.html`: pricing tables and gallery |
| [DD Month 2026] | Built `enquiry.html` and `contact.html` with forms and embedded maps |
| [DD Month 2026] | Added `css/style.css`: base styles, typography, layout, buttons, forms and footer |
| [DD Month 2026] | Added tablet (768px) and mobile (480px) media queries, including stacked pricing tables |
| [DD Month 2026] | Changed colour scheme from charcoal/gold to white/gold to match the brand |
| [DD Month 2026] | Fixed stylesheet not loading by moving `style.css` into the `css/` folder |
| [DD Month 2026] | Renamed HTML files and images folder to lowercase for case-sensitive hosting |
| [DD Month 2026] | Renamed hero image to `hero-barbershop.jpg` so it loads on the homepage |
| [DD Month 2026] | Added Part 3 CSS for the accordion, lightbox, maps, form errors and animations |
| [DD Month 2026] | Added `js/script.js`: accordion, lightbox, service search, form validation and scroll animations |
| [DD Month 2026] | Replaced static map iframes with Leaflet maps |
| [DD Month 2026] | Switched map tiles from OpenStreetMap to CARTO, then to Esri, to fix blocked and key-required tiles |
| [DD Month 2026] | Added meta keywords, lazy-loaded images and deferred scripts across all pages |
| [DD Month 2026] | Added `robots.txt` and `sitemap.xml` |
| [DD Month 2026] | Deployed to Netlify and updated `robots.txt` and `sitemap.xml` with the live URL |

## References

Esri (n.d.) *World Street Map*. Available at: https://www.arcgis.com (Accessed: 29 october 2026).

GitHub (n.d.) *GitHub Docs*. Available at: https://docs.github.com (Accessed: 28 july 2026).

Google (n.d.) *Search Engine Optimization (SEO) Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 29 october 2026).

Leaflet (n.d.) *Leaflet: an open-source JavaScript library for mobile-friendly interactive maps*. Available at: https://leafletjs.com (Accessed: 29 october 2026).

Mozilla (n.d.) *MDN Web Docs*. Available at: https://developer.mozilla.org (Accessed: 29 0ctober 2026).

Netlify (n.d.) *Netlify Docs*. Available at: https://docs.netlify.com (Accessed: 29 october 2026).

OpenStreetMap contributors (n.d.) *OpenStreetMap*. Available at: https://www.openstreetmap.org (Accessed: 29 october 2026).

Sitemaps.org (n.d.) *Sitemaps XML format*. Available at: https://www.sitemaps.org/protocol.html (Accessed: 29 october 2026).

W3Schools (n.d.) *HTML, CSS and JavaScript Tutorials*. Available at: https://www.w3schools.com (Accessed: 29 october 2026).