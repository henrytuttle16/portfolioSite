/* Video Modal and Lazy Loading */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('videoModal');

    // Return early if modal doesn't exist (not on films page)
    if (!modal) return;

    const modalOverlay = modal.querySelector('.modal__overlay');
    const modalClose = modal.querySelector('.modal__close');
    const modalVideo = modal.querySelector('.modal__video');
    const modalTitle = modal.querySelector('.modal__title');
    const modalDescription = modal.querySelector('.modal__description');
    const videoCards = document.querySelectorAll('.video-card');

    // Track currently playing video
    let currentIframe = null;

    // Open modal with video
    function openModal(videoData) {
      // Create iframe based on platform
      const iframe = createIframe(videoData);

      // Clear previous content
      modalVideo.innerHTML = '';
      modalVideo.appendChild(iframe);

      // Update title and description
      if (modalTitle) modalTitle.textContent = videoData.title;
      if (modalDescription) modalDescription.textContent = videoData.description || '';

      // Store reference to iframe
      currentIframe = iframe;

      // Show modal
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');

      // Prevent body scroll
      document.body.style.overflow = 'hidden';

      // Trap focus in modal
      trapFocus(modal);

      // Focus close button
      modalClose.focus();
    }

    // Close modal
    function closeModal() {
      // Remove iframe to stop playback
      if (modalVideo) {
        modalVideo.innerHTML = '';
      }
      currentIframe = null;

      // Hide modal
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');

      // Restore body scroll
      document.body.style.overflow = '';
    }

    // Create iframe based on platform
    function createIframe(videoData) {
      const iframe = document.createElement('iframe');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('loading', 'lazy');

      let src = '';

      if (videoData.platform === 'vimeo') {
        src = `https://player.vimeo.com/video/${videoData.videoId}?autoplay=1`;
      } else if (videoData.platform === 'youtube') {
        src = `https://www.youtube.com/embed/${videoData.videoId}?autoplay=1`;
      } else {
        // Generic iframe URL
        src = videoData.videoId; // Assume full URL is provided
      }

      iframe.src = src;
      iframe.title = videoData.title;

      return iframe;
    }

    // Trap focus within modal for accessibility
    function trapFocus(element) {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      element.addEventListener('keydown', function(e) {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            lastFocusable.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            firstFocusable.focus();
            e.preventDefault();
          }
        }
      });
    }

    // Add click listeners to video cards
    videoCards.forEach(function(card) {
      card.addEventListener('click', function() {
        const videoData = {
          title: card.getAttribute('data-title'),
          description: card.getAttribute('data-description'),
          platform: card.getAttribute('data-platform'),
          videoId: card.getAttribute('data-video-id')
        };
        openModal(videoData);
      });

      // Add keyboard support
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });

    // Close modal on close button click
    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    // Close modal on overlay click
    if (modalOverlay) {
      modalOverlay.addEventListener('click', closeModal);
    }

    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });
  });
})();
