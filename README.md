# Bilal Panoli Salon — Website Project

## Student Information
- **Name:** [Your Full Name]
- **Student Number:** [Your Student Number]
- **Module:** Web Development (Introduction) — WEDE5020
- **Assessment:** Portfolio of Evidence (PoE)

## Project Overview
Bilal Panoli Salon is an independently owned barbershop offering traditional
and modern grooming services to men in its local community. The salon has
built its client base through word-of-mouth and repeat custom, but currently
has no online presence beyond WhatsApp.

This project delivers a professional, responsive, and SEO-optimised website
for the salon, developed across three parts:
- **Part 1:** HTML structure and content (complete)
- **Part 2:** CSS styling and responsive design (complete)
- **Part 3:** JavaScript functionality and SEO (upcoming)

## Website Goals and Objectives
- Build a professional online presence that establishes trust with new and
  existing clients.
- Let clients view services, pricing, and hours without calling or
  messaging directly.
- Generate leads by improving visibility on Google and social media.

**Key Performance Indicators (KPIs):**
- 300+ monthly website visits within 3 months
- 20% increase in new bookings within 6 months
- Page load time under 3 seconds

## Key Features and Functionality
- Homepage introducing the brand with a hero section and calls to action
- About Us page covering the salon's story, mission/vision, team, and
  target audience
- Services page with pricing tables for haircuts, beard trims/shaves, and
  styling, plus a work gallery
- Enquiry/booking page with a form for service, preferred barber, date,
  and time
- Contact page with business details, opening hours, two embedded maps,
  and a general enquiry form
- White and gold visual theme, sticky navigation, and a fully responsive
  layout across desktop, tablet, and mobile

## Timeline and Milestones
| Week | Milestone |
|------|-----------|
| Week 1 | Research, wireframing, and content gathering |
| Week 2 | Visual design and homepage/services development |
| Week 3 | Booking form integration and mobile optimisation |
| Week 4 | Testing and client feedback |
| Week 5 | Final proofreading and launch |

## Part 1 Details
Part 1 delivers the foundational HTML structure of the website.

**Pages created:**
- `index.html` — Homepage
- `about.html` — About Us
- `services.html` — Services & Pricing
- `enquiry.html` — Booking/Enquiry form
- `contact.html` — Contact details, maps, and general enquiry form

All pages use semantic HTML5 elements (`header`, `nav`, `main`, `section`,
`footer`), are linked via a consistent navigation menu, and include code
comments explaining each section.

## Part 2 Details
Part 2 applies CSS styling and responsive design on top of the Part 1
HTML structure.

**What was added:**
- External stylesheet (`css/style.css`) linked to every page
- Base styles: CSS reset, font family, spacing, and a white and gold
  colour scheme
- Typography scale for headings and body text
- Flexbox layout for the sticky header/navigation
- CSS Grid layout for cards, team members, service galleries, and maps
- Visual styling: colours, borders, box-shadows on cards and tables
- Interactive states using `:hover`, `:focus`, and `:active` pseudo-classes
  on nav links, buttons, gallery images, and form fields
- Responsive design with two breakpoints (tablet: 768px, mobile: 480px),
  using relative units (`rem`, `%`, `vh`) and a stacked-card layout for
  pricing tables on small screens

**Corrections made after initial feedback/testing:**
- Fixed project file structure: `style.css` was originally saved in the
  project root instead of inside a `css/` subfolder, which caused the
  stylesheet not to load
- Renamed HTML files and the images folder to lowercase
  (`About.html` → `about.html`, `Images` → `images`, etc.) to match the
  paths referenced in the code and avoid case-sensitivity issues once
  deployed to GitHub Pages
- Updated the colour scheme from an initial charcoal/gold palette to the
  white and gold theme specified for the brand

## File and Folder Structure