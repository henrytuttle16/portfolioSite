/* Mobile Navigation Toggle */

(function() {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav__toggle');
    const navList = document.querySelector('.nav__list');
    const body = document.body;

    // Return early if navigation doesn't exist
    if (!navToggle || !navList) return;

    // Toggle mobile navigation
    navToggle.addEventListener('click', function() {
      const isOpen = navList.classList.contains('is-open');

      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    // Close navigation when clicking on a link
    const navLinks = navList.querySelectorAll('.nav__link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        closeNav();
      });
    });

    // Close navigation when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navList.contains(event.target) || navToggle.contains(event.target);

      if (!isClickInsideNav && navList.classList.contains('is-open')) {
        closeNav();
      }
    });

    // Close navigation on ESC key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && navList.classList.contains('is-open')) {
        closeNav();
      }
    });

    function openNav() {
      navList.classList.add('is-open');
      navToggle.classList.add('is-active');
      navToggle.setAttribute('aria-expanded', 'true');
      body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }

    function closeNav() {
      navList.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
      body.style.overflow = ''; // Restore scrolling
    }

    // Mark active page link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(function(link) {
      const linkHref = link.getAttribute('href');
      if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
        link.classList.add('nav__link--active');
      }
    });
  });
})();
