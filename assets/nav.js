/* ============================================================
   NAV — scroll-state + mobile toggle
   Used on both homepage (transparent over carousel, solid on scroll)
   and subpages (always solid via .is-solid class on load).
   ============================================================ */
(function () {
  "use strict";

  const nav = document.querySelector(".nav");
  if (!nav) return;

  // Scroll-state (homepage only — subpages set .is-solid statically)
  if (!nav.classList.contains("is-solid")) {
    const onScroll = () => {
      if (window.scrollY > 40) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Re-trigger subhero reveal animation on subpage load.
  // Static .is-active markup doesn't always transition from opacity:0,
  // so we strip it, let the browser paint, and re-apply it.
  document.querySelectorAll(".subhero .slide.is-active").forEach(slide => {
    slide.classList.remove("is-active");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => slide.classList.add("is-active"));
    });
  });

  // Mobile toggle
  const toggle = nav.querySelector(".nav__toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
    // Close on link click (mobile)
    nav.querySelectorAll(".nav__link, .nav__cta").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      });
    });
  }
})();
