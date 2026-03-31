/**
 * Floating Elements Fix
 * St. Lawrence Junior School - Kabowa
 * 
 * Ensures chatbot and back-to-top button work properly
 */

(function() {
    'use strict';

    // ========== ENSURE CHATBOT VISIBILITY ==========
    function ensureChatbotVisibility() {
        const chatButtons = document.querySelectorAll('.chat-button, #chatButton');
        
        chatButtons.forEach(button => {
            if (button) {
                // Force visibility and functionality
                button.style.opacity = '1';
                button.style.visibility = 'visible';
                button.style.display = 'flex';
                button.style.pointerEvents = 'auto';
                button.style.position = 'fixed';
                button.style.zIndex = '100010';
                
                // Ensure proper positioning
                button.style.right = 'max(16px, env(safe-area-inset-right, 0px))';
                button.style.bottom = 'max(16px, env(safe-area-inset-bottom, 0px))';
                
                // Allow essential transitions
                button.style.transition = 'opacity 0.3s ease, background-color 0.2s ease';
                button.style.webkitTransition = 'opacity 0.3s ease, background-color 0.2s ease';
                
                console.log('Chatbot visibility ensured');
            }
        });
    }

    // ========== ENSURE BACK-TO-TOP FUNCTIONALITY ==========
    function ensureBackToTopFunctionality() {
        const backToTopButtons = document.querySelectorAll('.back-to-top, #backToTop');
        
        backToTopButtons.forEach(button => {
            if (button) {
                // Allow normal show/hide behavior
                button.style.position = 'fixed';
                button.style.zIndex = '100005';
                button.style.pointerEvents = 'auto';
                button.style.display = 'flex';
                
                // Proper positioning
                button.style.right = 'max(16px, env(safe-area-inset-right, 0px))';
                button.style.bottom = 'max(80px, env(safe-area-inset-bottom, 0px) + 70px)';
                
                // Allow transitions for show/hide
                button.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
                button.style.webkitTransition = 'opacity 0.3s ease, visibility 0.3s ease';
                
                console.log('Back-to-top functionality ensured');
            }
        });
    }

    // ========== SCROLL HANDLER FOR BACK-TO-TOP ==========
    function handleBackToTopScroll() {
        const backToTopButtons = document.querySelectorAll('.back-to-top, #backToTop');
        
        function updateBackToTopVisibility() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            backToTopButtons.forEach(button => {
                if (button) {
                    if (scrollTop > 300) {
                        button.style.opacity = '1';
                        button.style.visibility = 'visible';
                    } else {
                        button.style.opacity = '0';
                        button.style.visibility = 'hidden';
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

    // ========== ENSURE HAMBURGER MENU WORKS ==========
    function ensureHamburgerWorks() {
        const hamburgers = document.querySelectorAll('.hamburger, #hamburger');
        
        hamburgers.forEach(hamburger => {
            if (hamburger) {
                hamburger.style.pointerEvents = 'auto';
                hamburger.style.cursor = 'pointer';
                hamburger.style.zIndex = '100030';
                hamburger.style.position = 'fixed';
                
                console.log('Hamburger functionality ensured');
            }
        });
    }

    // ========== OVERRIDE ANTI-SHAKE FOR ESSENTIAL ELEMENTS ==========
    function overrideAntiShakeForEssentials() {
        const style = document.createElement('style');
        style.id = 'floating-elements-override';
        style.textContent = `
            /* Override anti-shake for essential floating elements */
            .chat-button,
            #chatButton {
                opacity: 1 !important;
                visibility: visible !important;
                display: flex !important;
                pointer-events: auto !important;
                position: fixed !important;
                z-index: 100010 !important;
                transition: opacity 0.3s ease, background-color 0.2s ease !important;
                -webkit-transition: opacity 0.3s ease, background-color 0.2s ease !important;
            }
            
            .back-to-top,
            #backToTop {
                display: flex !important;
                pointer-events: auto !important;
                position: fixed !important;
                z-index: 100005 !important;
                transition: opacity 0.3s ease, visibility 0.3s ease !important;
                -webkit-transition: opacity 0.3s ease, visibility 0.3s ease !important;
            }
            
            .hamburger,
            #hamburger {
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
            
            .nav-menu,
            #navMenu {
                pointer-events: auto !important;
                transition: transform 0.3s ease, opacity 0.3s ease !important;
                -webkit-transition: transform 0.3s ease, opacity 0.3s ease !important;
            }
            
            /* Ensure proper positioning on mobile */
            @media (max-width: 768px) {
                .chat-button,
                #chatButton {
                    right: max(16px, env(safe-area-inset-right, 0px)) !important;
                    bottom: max(16px, env(safe-area-inset-bottom, 0px)) !important;
                }
                
                .back-to-top,
                #backToTop {
                    right: max(16px, env(safe-area-inset-right, 0px)) !important;
                    bottom: max(80px, env(safe-area-inset-bottom, 0px) + 70px) !important;
                }
                
                .hamburger,
                #hamburger {
                    top: max(16px, env(safe-area-inset-top, 0px) + 10px) !important;
                    right: max(16px, env(safe-area-inset-right, 0px) + 10px) !important;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    // ========== INITIALIZATION ==========
    function init() {
        console.log('Floating Elements Fix: Initializing...');
        
        // Apply overrides immediately
        overrideAntiShakeForEssentials();
        
        // Wait for DOM and other scripts to load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => {
                    ensureChatbotVisibility();
                    ensureBackToTopFunctionality();
                    ensureHamburgerWorks();
                    handleBackToTopScroll();
                }, 200); // Wait for other scripts
            });
        } else {
            setTimeout(() => {
                ensureChatbotVisibility();
                ensureBackToTopFunctionality();
                ensureHamburgerWorks();
                handleBackToTopScroll();
            }, 200);
        }

        // Re-check essential elements periodically
        setInterval(() => {
            ensureChatbotVisibility();
            ensureBackToTopFunctionality();
            ensureHamburgerWorks();
        }, 3000); // Check every 3 seconds

        console.log('Floating Elements Fix: Initialized');
    }

    // ========== AUTO-INITIALIZE ==========
    init();

    // Export for manual control
    window.FloatingElementsFix = {
        init: init,
        ensureChatbotVisibility: ensureChatbotVisibility,
        ensureBackToTopFunctionality: ensureBackToTopFunctionality,
        ensureHamburgerWorks: ensureHamburgerWorks,
        handleBackToTopScroll: handleBackToTopScroll
    };

})();