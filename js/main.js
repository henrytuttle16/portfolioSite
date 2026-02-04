/* Main JavaScript - Core functionality */

(function() {
  'use strict';

  // Add current year to footer (if exists)
  document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }

    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add loading state for external links with download attribute
    document.querySelectorAll('a[download]').forEach(function(link) {
      link.addEventListener('click', function() {
        // Optional: Add loading indicator
        console.log('Downloading:', this.getAttribute('download'));
      });
    });

    // Performance: Lazy load images
    if ('loading' in HTMLImageElement.prototype) {
      // Browser supports native lazy loading
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(function(img) {
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
      });
    } else {
      // Fallback: Use Intersection Observer
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.getAttribute('data-src');
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          });
        });

        document.querySelectorAll('img[data-src]').forEach(function(img) {
          imageObserver.observe(img);
        });
      }
    }

    // Console easter egg (optional fun touch)
    console.log(
      '%c👋 Hi there!',
      'font-size: 20px; font-weight: bold; color: #ff0000;'
    );
    console.log(
      '%cThanks for checking out the source. This site is built with vanilla HTML, CSS, and JavaScript.',
      'font-size: 14px; color: #666;'
    );

    // Custom cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Track mouse position
    document.addEventListener('mousemove', function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Smooth cursor animation
    function animateCursor() {
      // Smooth follow effect
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';

      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .video-card');

    interactiveElements.forEach(function(el) {
      el.addEventListener('mouseenter', function() {
        cursor.classList.add('hover');
      });

      el.addEventListener('mouseleave', function() {
        cursor.classList.remove('hover');
      });
    });
  });

  // Utility function: Debounce for performance
  window.debounce = function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = function() {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Utility function: Throttle for performance
  window.throttle = function(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(function() {
          inThrottle = false;
        }, limit);
      }
    };
  };
})();
