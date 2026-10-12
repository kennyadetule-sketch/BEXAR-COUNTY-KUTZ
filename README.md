# BEXAR COUNTY KUTZ — Multi-page website

A mobile-first barbershop website built with HTML5, CSS3 and vanilla JavaScript. No framework or build step is required.

## Run locally
Open `index.html` in a browser, or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Pages
- `index.html` — home
- `about.html` — about the shop
- `services.html` — service lineup
- `gallery.html` — gallery with accessible lightbox
- `reviews.html` — summary of publicly reported feedback themes, not fabricated quotes
- `faq.html` — business-specific FAQs
- `contact.html` — contact details, map and client-side form validation
- `privacy.html` and `terms.html` — policy drafts to review with the business owner

## Reuse for another business
Start in `js/config.js`. Update `BUSINESS` details, colors, opening hours, `SHOP_PHOTOS`, `SERVICES`, `GALLERY_IMAGES`, `FAQS`, and `REVIEWS`. Business information is centralized where practical; some editorial page copy remains in HTML.

## Content and photo notes
- The service descriptions reflect publicly listed haircut, fade/taper, beard trim, edge-up and kids' haircut offerings. Confirm current services, prices, durations and walk-in/appointment arrangements with the owner.
- The reviews page summarizes public review themes rather than reproducing customer quotations or attributing invented testimonials. Link to the original Google listing for individual reviews.
- Gallery and service photos are linked to Google-hosted images from the business's Maps photo listing where a direct image URL was available. Google may change these URLs; locally host owner-approved image files for maximum long-term reliability.
- The supplied Google Maps photo link for “Fresh fades” did not include a direct image URL, so the service lineup uses the direct haircut/fade photo URL supplied for the homepage service image.
- The homepage hero background remains the original Unsplash image as requested.
- The contact form uses the visitor's default email app; it does not send data to a server.
- Replace the example policy wording with policies approved by the business owner before launch.
