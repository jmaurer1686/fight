/**
 * Fight Leadership Team — script.js
 * Handles: scroll-reveal animations
 */

(function () {
  'use strict';

  // ── Scroll-reveal ─────────────────────────────────────
  // Adds .reveal class to key elements, then triggers .revealed
  // when they enter the viewport.

  const revealTargets = [
    '.gm-card',
    '.officer-card',
    '.achievement-card',
    '.hero-title',
    '.hero-blurb',
    '.accomplishments-heading',
  ];

  function addRevealClasses() {
    revealTargets.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el, i) => {
        el.classList.add('reveal');
        // Stagger cards within the same parent
        if (
          el.closest('.officers-grid') ||
          el.closest('.accomplishments-grid')
        ) {
          el.style.transitionDelay = `${i * 60}ms`;
        }
      });
    });
  }

  function createObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  // ── Init ──────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    addRevealClasses();
    createObserver();
  });
})();
