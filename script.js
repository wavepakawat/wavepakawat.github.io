/* ============================================================
   Portfolio interactions: language toggle, nav, scroll reveal
   ============================================================ */
(function () {
  "use strict";

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Language toggle (EN / TH) ---------- */
  var STORAGE_KEY = "site-lang";
  var toggle = document.getElementById("langToggle");

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    var nodes = document.querySelectorAll("[data-en][data-th]");
    nodes.forEach(function (el) {
      var val = el.getAttribute("data-" + lang);
      if (val != null) el.innerHTML = val;
    });
    // toggle button active state
    document.querySelectorAll(".lang-toggle__opt").forEach(function (opt) {
      opt.classList.toggle("active", opt.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  var saved = "en";
  try { saved = localStorage.getItem(STORAGE_KEY) || "en"; } catch (e) {}
  applyLang(saved);

  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("lang") === "th" ? "th" : "en";
      applyLang(current === "en" ? "th" : "en");
    });
  }

  /* ---------- Nav shadow on scroll ---------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 20);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveal ---------- */
  var revealTargets = document.querySelectorAll(".section, .hero__text, .hero__avatar");
  revealTargets.forEach(function (el) { el.setAttribute("data-reveal", ""); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("in"); });
  }
})();
