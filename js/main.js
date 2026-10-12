(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const page = document.body.dataset.page || "home";
  const currentPage = `${page}.html`;
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[char]));

  function applyBusinessConfig() {
    document.documentElement.style.setProperty("--primary", BUSINESS.primaryColor);
    document.documentElement.style.setProperty("--secondary", BUSINESS.secondaryColor);
    document.documentElement.style.setProperty("--accent", BUSINESS.accentColor);
    $$("[data-business]").forEach(el => {
      const key = el.dataset.business;
      if (key === "phoneLink") el.href = `tel:${BUSINESS.phone}`;
      else if (key === "emailLink") el.href = `mailto:${BUSINESS.email}`;
      else if (key === "whatsappLink") el.href = `https://wa.me/${BUSINESS.whatsapp}`;
      else if (key === "instagramLink") el.href = BUSINESS.instagram;
      else if (key === "facebookLink") el.href = BUSINESS.facebook;
      else if (key === "mapsLink") el.href = BUSINESS.googleMaps;
      else if (key === "mapEmbed") el.src = BUSINESS.mapEmbed;
      else if (key === "phone") el.textContent = BUSINESS.phoneDisplay || BUSINESS.phone;
      else if (key === "name") el.textContent = BUSINESS.name;
      else if (key === "tagline") el.textContent = BUSINESS.tagline;
      else if (key === "description") el.textContent = BUSINESS.description;
      else if (key === "email") el.textContent = BUSINESS.email;
      else if (key === "address") el.textContent = BUSINESS.address;
    });
    $$("[data-hours]").forEach(el => {
      const day = el.dataset.hours;
      const value = BUSINESS.openingHours[day];
      if (value) el.textContent = value;
    });
    $$("[data-today-hours]").forEach(el => {
      const day = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][new Date().getDay()];
      el.textContent = BUSINESS.openingHours[day] || "Please call";
    });
    const schema = $("#business-schema");
    if (schema) {
      const json = {
        "@context":"https://schema.org","@type":"BarberShop","name":BUSINESS.name,
        "description":BUSINESS.description,"telephone":BUSINESS.phone,"email":BUSINESS.email,
        "address":{"@type":"PostalAddress","streetAddress":"5404 Military Dr W","addressLocality":"San Antonio","addressRegion":"TX","postalCode":"78242","addressCountry":"US"},
        "sameAs":[BUSINESS.instagram,BUSINESS.facebook,BUSINESS.googleMaps],
        "openingHoursSpecification":Object.entries(BUSINESS.openingHours).map(([day,hours]) => ({
          "@type":"OpeningHoursSpecification","dayOfWeek":`https://schema.org/${day[0].toUpperCase()+day.slice(1)}`,"description":hours
        }))
      };
      schema.textContent = JSON.stringify(json);
    }
    $$("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  }

  function setupNavigation() {
    const panel = $(".mobile-panel"), backdrop = $(".menu-backdrop"), toggle = $(".menu-toggle"), close = $(".menu-close");
    if (!panel || !toggle) return;
    const open = () => {
      panel.classList.add("open"); backdrop?.classList.add("open"); document.body.classList.add("menu-open");
      toggle.setAttribute("aria-expanded","true"); panel.setAttribute("aria-hidden","false"); close?.focus();
    };
    const shut = () => {
      panel.classList.remove("open"); backdrop?.classList.remove("open"); document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded","false"); panel.setAttribute("aria-hidden","true"); toggle.focus();
    };
    toggle.addEventListener("click", open);
    close?.addEventListener("click", shut);
    backdrop?.addEventListener("click", shut);
    $$(".mobile-links a", panel).forEach(link => link.addEventListener("click", () => {
      panel.classList.remove("open"); backdrop?.classList.remove("open"); document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded","false"); panel.setAttribute("aria-hidden","true");
    }));
    document.addEventListener("keydown", e => { if (e.key === "Escape" && panel.classList.contains("open")) shut(); });
    $$("[data-page-link]").forEach(link => {
      if (link.dataset.pageLink === page) {
        link.setAttribute("aria-current","page");
      } else link.removeAttribute("aria-current");
    });
  }

  function renderServices() {
    const list = $("#services-grid");
    if (!list) return;
    const groups = [...new Set(SERVICES.map(service => service.category))];
    list.innerHTML = groups.map(group => `
      <section class="service-category">
        <div class="section-head"><span class="eyebrow">${escapeHTML(group)}</span><h2>${escapeHTML(group)} services</h2></div>
        <div class="cards">${SERVICES.filter(s => s.category === group).map(service => `
          <article class="service-card">
            <img src="${escapeHTML(service.image)}" alt="${escapeHTML(service.alt)}" loading="lazy" width="900" height="650">
            <div class="service-card-body"><h3>${escapeHTML(service.name)}</h3><p>${escapeHTML(service.description)}</p>
            <div class="service-meta"><span>${escapeHTML(service.price)}</span><span>${escapeHTML(service.duration)}</span></div>
            <a class="text-link" href="contact.html">Ask about this service ↗</a></div>
          </article>`).join("")}</div>
      </section>`).join("");
  }

  function renderGallery() {
    const grid = $("#gallery-grid");
    if (!grid) return;
    grid.innerHTML = GALLERY_IMAGES.map((item, index) => `
      <button class="gallery-item" type="button" data-gallery-index="${index}" aria-label="Enlarge image: ${escapeHTML(item.label)}">
        <img src="${escapeHTML(item.src)}" alt="${escapeHTML(item.alt)}" loading="lazy" width="900" height="900">
        <span class="gallery-label">${escapeHTML(item.label)}</span>
      </button>`).join("");
    const lightbox = $(".lightbox"), lightboxImg = $(".lightbox-image"), caption = $(".lightbox-caption");
    if (!lightbox) return;
    let active = 0, previousFocus = null;
    const show = index => {
      active = (index + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
      const item = GALLERY_IMAGES[active]; lightboxImg.src = item.src; lightboxImg.alt = item.alt; caption.textContent = `${item.label} (${active+1} of ${GALLERY_IMAGES.length})`;
    };
    const open = index => { previousFocus = document.activeElement; show(index); lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden"; $(".lightbox-close").focus(); };
    const close = () => { lightbox.classList.remove("open"); lightbox.setAttribute("aria-hidden","true"); document.body.style.overflow=""; previousFocus?.focus(); };
    grid.addEventListener("click", e => { const button = e.target.closest("[data-gallery-index]"); if (button) open(Number(button.dataset.galleryIndex)); });
    $(".lightbox-close")?.addEventListener("click", close);
    $(".lightbox-prev")?.addEventListener("click", () => show(active-1));
    $(".lightbox-next")?.addEventListener("click", () => show(active+1));
    lightbox.addEventListener("click", e => { if (e.target === lightbox) close(); });
    document.addEventListener("keydown", e => {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(active-1);
      if (e.key === "ArrowRight") show(active+1);
    });
  }

  function renderReviews() {
    const grid = $("#reviews-grid");
    if (!grid) return;
    grid.innerHTML = REVIEWS.map(review => `<article class="review-card">
      <div class="stars" aria-label="${review.rating} out of 5 stars">${"★".repeat(review.rating)}${"☆".repeat(5-review.rating)}</div>
      <blockquote>“${escapeHTML(review.text)}”</blockquote>
      <div class="review-author">${escapeHTML(review.name)}</div><div class="review-source">${escapeHTML(review.source)}</div>
    </article>`).join("");
  }

  function renderFaqs() {
    const list = $("#faq-list");
    if (!list) return;
    list.innerHTML = FAQS.map((faq, index) => `<article class="faq-item">
      <h3 style="margin:0"><button class="faq-question" type="button" id="faq-q-${index}" aria-expanded="false" aria-controls="faq-a-${index}">
      <span>${escapeHTML(faq.q)}</span><span aria-hidden="true">+</span></button></h3>
      <div class="faq-answer" id="faq-a-${index}" role="region" aria-labelledby="faq-q-${index}" hidden><p>${escapeHTML(faq.a)}</p></div>
    </article>`).join("");
    list.addEventListener("click", e => {
      const button = e.target.closest(".faq-question"); if (!button) return;
      const answer = document.getElementById(button.getAttribute("aria-controls"));
      const wasOpen = button.getAttribute("aria-expanded") === "true";
      $$(".faq-question", list).forEach(other => {
        other.setAttribute("aria-expanded","false"); other.querySelector("span:last-child").textContent = "+";
        document.getElementById(other.getAttribute("aria-controls")).hidden = true;
      });
      if (!wasOpen) { button.setAttribute("aria-expanded","true"); button.querySelector("span:last-child").textContent = "−"; answer.hidden = false; }
    });
  }

  function setupContactForm() {
    const form = $("#contact-form");
    if (!form) return;
    const status = $(".form-status", form);
    form.addEventListener("submit", event => {
      event.preventDefault();
      let valid = true;
      $$("[required]", form).forEach(field => {
        const error = $(`[data-error-for="${field.name}"]`, form);
        let message = "";
        if (!field.value.trim()) message = "Please complete this field.";
        else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())) message = "Enter a valid email address.";
        if (error) error.textContent = message;
        field.setAttribute("aria-invalid", message ? "true" : "false");
        if (message) valid = false;
      });
      if (!valid) { status.classList.remove("show"); status.textContent = "Please check the highlighted fields."; return; }
      const data = new FormData(form);
      const subject = encodeURIComponent(`[Website enquiry] ${data.get("subject")}`);
      const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}\n\n${data.get("message")}`);
      status.textContent = "Your details are ready. Your email app will open so you can send the message to the shop.";
      status.classList.add("show");
      window.location.href = `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
    });
    $$("input,textarea,select", form).forEach(field => field.addEventListener("input", () => {
      const error = $(`[data-error-for="${field.name}"]`, form);
      if (error) error.textContent = "";
      field.removeAttribute("aria-invalid");
    }));
  }

  function setupScrollUI() {
    const button = $(".to-top");
    if (!button) return;
    const update = () => button.classList.toggle("visible", window.scrollY > 500);
    window.addEventListener("scroll", update, {passive:true}); update();
    button.addEventListener("click", () => window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"}));
    const animated = $$(".reveal");
    if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.style.opacity = "1"; entry.target.style.transform = "none"; observer.unobserve(entry.target); }
      }), {threshold:.12});
      animated.forEach(el => { el.style.opacity = "0"; el.style.transform = "translateY(14px)"; el.style.transition = "opacity .5s ease,transform .5s ease"; observer.observe(el); });
    }
  }

  applyBusinessConfig();
  setupNavigation();
  renderServices();
  renderGallery();
  renderReviews();
  renderFaqs();
  setupContactForm();
  setupScrollUI();
})();