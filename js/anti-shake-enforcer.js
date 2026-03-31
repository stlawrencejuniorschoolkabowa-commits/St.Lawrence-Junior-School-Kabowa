/**
 * Targeted Anti-Shake Enforcer
 * St. Lawrence Junior School - Kabowa
 * 
 * Prevents shaking animations while preserving essential functionality
 */

(function() {
    'use strict';

    // Only run on mobile devices
    if (window.innerWidth > 768) return;

    console.log('Targeted Anti-Shake Enforcer: Initializing...');

    // ========== DISABLE AOS LIBRARY ==========
    function disableAOS() {
        // Override AOS if it exists
        if (window.AOS) {
            window.AOS.init = function() {
                console.log('AOS disabled by Anti-Shake Enforcer');
            };
            window.AOS.refresh = function() {};
            window.AOS.refreshHard = function() {};
        }

        // Remove AOS attributes and classes
        document.querySelectorAll('[data-aos]').forEach(element => {
            element.removeAttribute('data-aos');
            element.removeAttribute('data-aos-delay');
            element.removeAttribute('data-aos-duration');
            element.classList.remove('aos-animate', 'aos-init');
            element.style.opacity = '1';
            element.style.transform = 'translate3d(0px, 0px, 0px)';
        });
    }

    // ========== ENSURE ESSENTIAL ELEMENTS WORK ==========
    function ensureEssentialElements() {
        // Chatbot - always visible
        const chatButtons = document.querySelectorAll('.chat-button, #chatButton');
        chatButtons.forEach(button => {
            if (button) {
                button.style.opacity = '1';
                button.style.visibility = 'visible';
                button.style.display = 'flex';
                button.style.pointerEvents = 'auto';
            }
        });

        // Back-to-top button - allow normal behavior
        const backToTopButtons = document.querySelectorAll('.back-to-top, #backToTop');
        backToTopButtons.forEach(button => {
            if (button) {
                button.style.pointerEvents = 'auto';
                button.style.display = 'flex';
            }
        });

        // Hamburger menu - ensure it works
        const hamburgers = document.querySelectorAll('.hamburger, #hamburger');
        hamburgers.forEach(hamburger => {
            if (hamburger) {
                hamburger.style.pointerEvents = 'auto';
                hamburger.style.cursor = 'pointer';
            }
        });
    }

    // ========== STABILIZE IMAGES ONLY ==========
    function stabilizeImages() {
        const images = document.querySelectorAll('img, picture, svg');
        images.forEach(img => {
            // Only stabilize transform, allow other properties
            img.style.transform = 'translate3d(0px, 0px, 0px)';
            img.style.webkitTransform = 'translate3d(0px, 0px, 0px)';
            img.style.backfaceVisibility = 'hidden';
            img.style.webkitBackfaceVisibility = 'hidden';
        });
    }

    // ========== INITIALIZATION ==========
    function init() {
        console.log('Targeted Anti-Shake Enforcer: Starting targeted fixes...');
        
        // Apply fixes after DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => {
                    disableAOS();
                    ensureEssentialElements();
                    stabilizeImages();
                }, 100);
            });
        } else {
            setTimeout(() => {
                disableAOS();
                ensureEssentialElements();
                stabilizeImages();
            }, 100);
        }

        // Re-check essential elements periodically
        setInterval(() => {
            ensureEssentialElements();
        }, 2000);

        console.log('Targeted Anti-Shake Enforcer: Initialized');
    }

    // ========== AUTO-INITIALIZE ==========
    init();

    // Export for manual control
    window.AntiShakeEnforcer = {
        init: init,
        disableAOS: disableAOS,
        ensureEssentialElements: ensureEssentialElements,
        stabilizeImages: stabilizeImages
    };

})();