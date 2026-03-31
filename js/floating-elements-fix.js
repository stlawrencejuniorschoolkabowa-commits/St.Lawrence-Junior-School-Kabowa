/**
 * Aggressive Floating Elements Fix
 * St. Lawrence Junior School - Kabowa
 * 
 * Forces chatbot and back-to-top button to work properly
 */

(function() {
    'use strict';

    // ========== FORCE CHATBOT VISIBILITY ==========
    function forceChatbotVisibility() {
        const chatButtons = document.querySelectorAll('.chat-button, #chatButton');
        
        chatButtons.forEach(button => {
            if (button) {
                // FORCE all properties with setProperty and important flag
                button.style.setProperty('opacity', '1', 'important');
                button.style.setProperty('visibility', 'visible', 'important');
                button.style.setProperty('display', 'flex', 'important');
                button.style.setProperty('pointer-events', 'auto', 'important');
                button.style.setProperty('cursor', 'pointer', 'important');
                button.style.setProperty('position', 'fixed', 'important');
                button.style.setProperty('z-index', '100010', 'important');
                button.style.setProperty('right', 'max(16px, env(safe-area-inset-right, 0px))', 'important');
                button.style.setProperty('bottom', 'max(16px, env(safe-area-inset-bottom, 0px))', 'important');
                button.style.setProperty('transition', 'opacity 0.3s ease, background-color 0.2s ease', 'important');
                button.style.setProperty('-webkit-transition', 'opacity 0.3s ease, background-color 0.2s ease', 'important');
                
                console.log('Chatbot FORCED visible');
            }
        });
    }

    // ========== FORCE BACK-TO-TOP FUNCTIONALITY ==========
    function forceBackToTopFunctionality() {
        const backToTopButtons = document.querySelectorAll('.back-to-top, #backToTop');
        
        backToTopButtons.forEach(button => {
            if (button) {
                // FORCE all properties
                button.style.setProperty('display', 'flex', 'important');
                button.style.setProperty('pointer-events', 'auto', 'important');
                button.style.setProperty('cursor', 'pointer', 'important');
                button.style.setProperty('position', 'fixed', 'important');
                button.style.setProperty('z-index', '100005', 'important');
                button.style.setProperty('right', 'max(16px, env(safe-area-inset-right, 0px))', 'important');
                button.style.setProperty('bottom', 'max(80px, env(safe-area-inset-bottom, 0px) + 70px)', 'important');
                button.style.setProperty('transition', 'opacity 0.3s ease, visibility 0.3s ease', 'important');
                button.style.setProperty('-webkit-transition', 'opacity 0.3s ease, visibility 0.3s ease', 'important');
                
                console.log('Back-to-top FORCED functional');
            }
        });
    }

    // ========== HANDLE BACK-TO-TOP SCROLL ==========
    function handleBackToTopScroll() {
        const backToTopButtons = document.querySelectorAll('.back-to-top, #backToTop');
        
        function updateBackToTopVisibility() {
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

        // Throttled scroll handler
        let ticking = false;
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateBackToTopVisibility);
                ticking = true;
                setTimeout(() => { ticking = false; }, 16); // ~60fps
            }
        }

        window.addEventListener('scroll', requestTick, { passive: true });
        
        // Initial check
        updateBackToTopVisibility();
    }

    // ========== FORCE HAMBURGER FUNCTIONALITY ==========
    function forceHamburgerFunctionality() {
        const hamburgers = document.querySelectorAll('.hamburger, #hamburger');
        
        hamburgers.forEach(hamburger => {
            if (hamburger) {
                hamburger.style.setProperty('pointer-events', 'auto', 'important');
                hamburger.style.setProperty('cursor', 'pointer', 'important');
                hamburger.style.setProperty('position', 'fixed', 'important');
                hamburger.style.setProperty('z-index', '100030', 'important');
                hamburger.style.setProperty('top', 'max(16px, env(safe-area-inset-top, 0px) + 10px)', 'important');
                hamburger.style.setProperty('right', 'max(16px, env(safe-area-inset-right, 0px) + 10px)', 'important');
                
                console.log('Hamburger FORCED functional');
            }
        });
    }

    // ========== INJECT AGGRESSIVE CSS OVERRIDE ==========
    function injectAggressiveCSS() {
        const style = document.createElement('style');
        style.id = 'aggressive-floating-elements-override';
        style.textContent = `
            /* AGGRESSIVE OVERRIDE FOR FLOATING ELEMENTS */
            @media (max-width: 768px) {
                .chat-button,
                #chatButton {
                    opacity: 1 !important;
                    visibility: visible !important;
                    display: flex !important;
                    pointer-events: auto !important;
                    cursor: pointer !important;
                    position: fixed !important;
                    z-index: 100010 !important;
                    right: max(16px, env(safe-area-inset-right, 0px)) !important;
                    bottom: max(16px, env(safe-area-inset-bottom, 0px)) !important;
                    transition: opacity 0.3s ease, background-color 0.2s ease !important;
                    -webkit-transition: opacity 0.3s ease, background-color 0.2s ease !important;
                }
                
                .back-to-top,
                #backToTop {
                    display: flex !important;
                    pointer-events: auto !important;
                    cursor: pointer !important;
                    position: fixed !important;
                    z-index: 100005 !important;
                    right: max(16px, env(safe-area-inset-right, 0px)) !important;
                    bottom: max(80px, env(safe-area-inset-bottom, 0px) + 70px) !important;
                    transition: opacity 0.3s ease, visibility 0.3s ease !important;
                    -webkit-transition: opacity 0.3s ease, visibility 0.3s ease !important;
                }
                
                .hamburger,
                #hamburger {
                    pointer-events: auto !important;
                    cursor: pointer !important;
                    position: fixed !important;
                    z-index: 100030 !important;
                    top: max(16px, env(safe-area-inset-top, 0px) + 10px) !important;
                    right: max(16px, env(safe-area-inset-right, 0px) + 10px) !important;
                    transition: opacity 0.3s ease, background-color 0.3s ease !important;
                    -webkit-transition: opacity 0.3s ease, background-color 0.3s ease !important;
                }
                
                .hamburger span {
                    transition: all 0.3s ease !important;
                    -webkit-transition: all 0.3s ease !important;
                }
                
                .nav-menu,
                #navMenu {
                    pointer-events: auto !important;
                    transition: transform 0.3s ease, opacity 0.3s ease !important;
                    -webkit-transition: transform 0.3s ease, opacity 0.3s ease !important;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    // ========== AGGRESSIVE MONITORING ==========
    function startAggressiveMonitoring() {
        // Force elements every 200ms
        setInterval(() => {
            forceChatbotVisibility();
            forceBackToTopFunctionality();
            forceHamburgerFunctionality();
        }, 200);
    }

    // ========== INITIALIZATION ==========
    function init() {
        console.log('Aggressive Floating Elements Fix: Initializing...');
        
        // Apply aggressive CSS immediately
        injectAggressiveCSS();
        
        // Wait for DOM and other scripts to load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => {
                    forceChatbotVisibility();
                    forceBackToTopFunctionality();
                    forceHamburgerFunctionality();
                    handleBackToTopScroll();
                    startAggressiveMonitoring();
                }, 100);
            });
        } else {
            setTimeout(() => {
                forceChatbotVisibility();
                forceBackToTopFunctionality();
                forceHamburgerFunctionality();
                handleBackToTopScroll();
                startAggressiveMonitoring();
            }, 100);
        }

        console.log('Aggressive Floating Elements Fix: Nuclear approach activated');
    }

    // ========== AUTO-INITIALIZE ==========
    init();

    // Export for manual control
    window.FloatingElementsFix = {
        init: init,
        forceChatbotVisibility: forceChatbotVisibility,
        forceBackToTopFunctionality: forceBackToTopFunctionality,
        forceHamburgerFunctionality: forceHamburgerFunctionality,
        handleBackToTopScroll: handleBackToTopScroll
    };

})();