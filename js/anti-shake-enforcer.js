/**
 * Aggressive Anti-Shake Enforcer
 * St. Lawrence Junior School - Kabowa
 * 
 * Completely prevents shaking animations while forcing essential elements to work
 */

(function() {
    'use strict';

    // Only run on mobile devices
    if (window.innerWidth > 768) return;

    console.log('Aggressive Anti-Shake Enforcer: Initializing...');

    // ========== FORCE ESSENTIAL ELEMENTS TO BE VISIBLE ========== 
    function forceEssentialElementsVisible() {
        // Chatbot - FORCE VISIBILITY
        const chatButtons = document.querySelectorAll('.chat-button, #chatButton');
        chatButtons.forEach(button => {
            if (button) {
                button.style.setProperty('opacity', '1', 'important');
                button.style.setProperty('visibility', 'visible', 'important');
                button.style.setProperty('display', 'flex', 'important');
                button.style.setProperty('pointer-events', 'auto', 'important');
                button.style.setProperty('position', 'fixed', 'important');
                button.style.setProperty('z-index', '100010', 'important');
                button.style.setProperty('right', 'max(16px, env(safe-area-inset-right, 0px))', 'important');
                button.style.setProperty('bottom', 'max(16px, env(safe-area-inset-bottom, 0px))', 'important');
                console.log('Chatbot forced visible');
            }
        });

        // Back-to-top - FORCE FUNCTIONALITY
        const backToTopButtons = document.querySelectorAll('.back-to-top, #backToTop');
        backToTopButtons.forEach(button => {
            if (button) {
                button.style.setProperty('display', 'flex', 'important');
                button.style.setProperty('pointer-events', 'auto', 'important');
                button.style.setProperty('position', 'fixed', 'important');
                button.style.setProperty('z-index', '100005', 'important');
                button.style.setProperty('right', 'max(16px, env(safe-area-inset-right, 0px))', 'important');
                button.style.setProperty('bottom', 'max(80px, env(safe-area-inset-bottom, 0px) + 70px)', 'important');
                
                // Show/hide based on scroll
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > 300) {
                    button.style.setProperty('opacity', '1', 'important');
                    button.style.setProperty('visibility', 'visible', 'important');
                } else {
                    button.style.setProperty('opacity', '0', 'important');
                    button.style.setProperty('visibility', 'hidden', 'important');
                }
                console.log('Back-to-top forced functional');
            }
        });

        // Hamburger - FORCE FUNCTIONALITY
        const hamburgers = document.querySelectorAll('.hamburger, #hamburger');
        hamburgers.forEach(hamburger => {
            if (hamburger) {
                hamburger.style.setProperty('pointer-events', 'auto', 'important');
                hamburger.style.setProperty('cursor', 'pointer', 'important');
                hamburger.style.setProperty('position', 'fixed', 'important');
                hamburger.style.setProperty('z-index', '100030', 'important');
                console.log('Hamburger forced functional');
            }
        });
    }

    // ========== DISABLE ALL ANIMATIONS AGGRESSIVELY ==========
    function disableAllAnimations() {
        // Create ultra-aggressive anti-animation stylesheet
        const style = document.createElement('style');
        style.id = 'aggressive-anti-shake';
        style.textContent = `
            @media (max-width: 768px) {
                /* NUCLEAR OPTION - DISABLE EVERYTHING */
                *, *::before, *::after {
                    animation: none !important;
                    -webkit-animation: none !important;
                    transition: none !important;
                    -webkit-transition: none !important;
                    transform: translate3d(0, 0, 0) !important;
                    -webkit-transform: translate3d(0, 0, 0) !important;
                }
                
                /* FORCE ESSENTIAL ELEMENTS */
                .chat-button, #chatButton {
                    opacity: 1 !important;
                    visibility: visible !important;
                    display: flex !important;
                    pointer-events: auto !important;
                    position: fixed !important;
                    z-index: 100010 !important;
                    right: max(16px, env(safe-area-inset-right, 0px)) !important;
                    bottom: max(16px, env(safe-area-inset-bottom, 0px)) !important;
                    transition: opacity 0.3s ease, background-color 0.2s ease !important;
                    -webkit-transition: opacity 0.3s ease, background-color 0.2s ease !important;
                }
                
                .back-to-top, #backToTop {
                    display: flex !important;
                    pointer-events: auto !important;
                    position: fixed !important;
                    z-index: 100005 !important;
                    right: max(16px, env(safe-area-inset-right, 0px)) !important;
                    bottom: max(80px, env(safe-area-inset-bottom, 0px) + 70px) !important;
                    transition: opacity 0.3s ease, visibility 0.3s ease !important;
                    -webkit-transition: opacity 0.3s ease, visibility 0.3s ease !important;
                }
                
                .hamburger, #hamburger {
                    pointer-events: auto !important;
                    cursor: pointer !important;
                    position: fixed !important;
                    z-index: 100030 !important;
                    transition: opacity 0.3s ease, background-color 0.3s ease !important;
                    -webkit-transition: opacity 0.3s ease, background-color 0.3s ease !important;
                }
                
                .hamburger span {
                    transition: all 0.3s ease !important;
                    -webkit-transition: all 0.3s ease !important;
                }
                
                .nav-menu, #navMenu {
                    pointer-events: auto !important;
                    transition: transform 0.3s ease, opacity 0.3s ease !important;
                    -webkit-transition: transform 0.3s ease, opacity 0.3s ease !important;
                }
                
                .btn, button, a, input, textarea, select {
                    pointer-events: auto !important;
                    cursor: pointer !important;
                    transition: opacity 0.2s ease, background-color 0.2s ease !important;
                    -webkit-transition: opacity 0.2s ease, background-color 0.2s ease !important;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    // ========== DISABLE AOS COMPLETELY ==========
    function disableAOS() {
        // Override AOS if it exists
        if (window.AOS) {
            window.AOS.init = function() {
                console.log('AOS completely disabled');
            };
            window.AOS.refresh = function() {};
            window.AOS.refreshHard = function() {};
        }

        // Remove all AOS attributes and classes
        document.querySelectorAll('[data-aos]').forEach(element => {
            element.removeAttribute('data-aos');
            element.removeAttribute('data-aos-delay');
            element.removeAttribute('data-aos-duration');
            element.classList.remove('aos-animate', 'aos-init');
            element.style.setProperty('opacity', '1', 'important');
            element.style.setProperty('transform', 'translate3d(0px, 0px, 0px)', 'important');
        });
    }

    // ========== HANDLE SCROLL FOR BACK-TO-TOP ==========
    function handleScroll() {
        const backToTopButtons = document.querySelectorAll('.back-to-top, #backToTop');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        backToTopButtons.forEach(button => {
            if (button) {
                if (scrollTop > 300) {
                    button.style.setProperty('opacity', '1', 'important');
                    button.style.setProperty('visibility', 'visible', 'important');
                } else {
                    button.style.setProperty('opacity', '0', 'important');
                    button.style.setProperty('visibility', 'hidden', 'important');
                }
            }
        });
    }

    // ========== CONTINUOUS MONITORING ==========
    function startAggressiveMonitoring() {
        // Force essential elements every 500ms
        setInterval(() => {
            forceEssentialElementsVisible();
        }, 500);
        
        // Handle scroll for back-to-top
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // ========== INITIALIZATION ==========
    function init() {
        console.log('Aggressive Anti-Shake Enforcer: Starting nuclear approach...');
        
        // Apply all fixes immediately
        disableAllAnimations();
        disableAOS();
        
        // Force essential elements after DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => {
                    forceEssentialElementsVisible();
                    handleScroll();
                    startAggressiveMonitoring();
                }, 100);
            });
        } else {
            setTimeout(() => {
                forceEssentialElementsVisible();
                handleScroll();
                startAggressiveMonitoring();
            }, 100);
        }

        console.log('Aggressive Anti-Shake Enforcer: Nuclear approach activated');
    }

    // ========== AUTO-INITIALIZE ==========
    init();

    // Export for manual control
    window.AntiShakeEnforcer = {
        init: init,
        forceEssentialElementsVisible: forceEssentialElementsVisible,
        disableAllAnimations: disableAllAnimations,
        disableAOS: disableAOS,
        handleScroll: handleScroll
    };

})();