/* Arnique — interactions: scroll reveals + mobile nav */

(function () {
  "use strict";

  // Flag that JS is active so the CSS reveal-hide rules apply.
  document.documentElement.classList.add("js");

  /* ── Scroll reveal ─────────────────────────────────────── */
  var reveals = document.querySelectorAll(".reveal");

  // Stagger siblings inside grids/lists for a cascade effect.
  reveals.forEach(function (el) {
    var group = el.parentElement;
    if (!group) return;
    var siblings = Array.prototype.slice.call(group.children);
    var idx = siblings.indexOf(el);
    if (siblings.length > 1 && idx > 0) {
      el.style.setProperty("--d", Math.min(idx * 80, 400) + "ms");
    }
  });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ── Mobile menu ───────────────────────────────────────── */
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("mobile-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      menu.hidden = open;
      menu.classList.toggle("open", !open);
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        menu.hidden = true;
        menu.classList.remove("open");
      });
    });
  }

  /* ── Nav scrolled state (border stays; subtle bg deepen) ── */
  var nav = document.querySelector(".nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("nav--scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
