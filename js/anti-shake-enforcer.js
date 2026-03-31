/**
 * SMART Anti-Shake Enforcer
 * St. Lawrence Junior School - Kabowa
 * 
 * Eliminates shaking while preserving navigation functionality
 */

(function() {
    'use strict';

    // Only run on mobile devices
    if (window.innerWidth > 768) return;

    console.log('SMART Anti-Shake Enforcer: Initializing...');

    // ========== SMART FORCE ESSENTIAL ELEMENTS ========== 
    function smartForceEssentialElements() {
        // Chatbot - FORCE VISIBILITY
        const chatButtons = document.querySelectorAll('.chat-button, #chatButton');
        chatButtons.forEach(button => {
            if (button) {
                // Only force essential properties, don't remove all styles
                button.style.setProperty('opacity', '1', 'important');
                button.style.setProperty('visibility', 'visible', 'important');
                button.style.setProperty('display', 'flex', 'important');
                button.style.setProperty('pointer-events', 'auto', 'important');
                button.style.setProperty('position', 'fixed', 'important');
                button.style.setProperty('z-index', '999999', 'important');
                button.style.setProperty('right', '16px', 'important');
                button.style.setProperty('bottom', '16px', 'important');
                
                console.log('Chatbot SMART FORCED visible');
            }
        });

        // Back-to-top - FORCE FUNCTIONALITY
        const backToTopButtons = document.querySelectorAll('.back-to-top, #backToTop');
        backToTopButtons.forEach(button => {
            if (button) {
                // Only force essential properties
                button.style.setProperty('display', 'flex', 'important');
                button.style.setProperty('pointer-events', 'auto', 'important');
                button.style.setProperty('position', 'fixed', 'important');
                button.style.setProperty('z-index', '999998', 'important');
                button.style.setProperty('right', '16px', 'important');
                button.style.setProperty('bottom', '90px', 'important');
                
                // Show/hide based on scroll
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > 300) {
                    button.style.setProperty('opacity', '1', 'important');
                    button.style.setProperty('visibility', 'visible', 'important');
                } else {
                    button.style.setProperty('opacity', '0', 'important');
                    button.style.setProperty('visibility', 'hidden', 'important');
                }
                
                console.log('Back-to-top SMART FORCED functional');
            }
        });

        // Hamburger - PRESERVE FUNCTIONALITY
        const hamburgers = document.querySelectorAll('.hamburger, #hamburger');
        hamburgers.forEach(hamburger => {
            if (hamburger) {
                hamburger.style.setProperty('pointer-events', 'auto', 'important');
                hamburger.style.setProperty('cursor', 'pointer', 'important');
                
                console.log('Hamburger SMART PRESERVED functional');
            }
        });
    }

    // ========== INJECT SMART CSS ========== 
    function injectSmartCSS() {
        // Remove any existing aggressive override styles
        const existingStyles = document.querySelectorAll('#ultra-aggressive-override, #aggressive-anti-shake, #floating-elements-override, #aggressive-floating-elements-override');
        existingStyles.forEach(style => style.remove());
        
        const style = document.createElement('style');
        style.id = 'smart-override';
        style.textContent = `
            /* SMART OVERRIDE - PRESERVES NAVIGATION */
            @media (max-width: 768px) {
                /* Chatbot - HIGH PRIORITY */
                .chat-button,
                #chatButton {
                    opacity: 1 !important;
                    visibility: visible !important;
                    display: flex !important;
                    pointer-events: auto !important;
                    cursor: pointer !important;
                    position: fixed !important;
                    z-index: 999999 !important;
                    right: 16px !important;
                    bottom: 16px !important;
                }
                
                /* Back-to-top - HIGH PRIORITY */
                .back-to-top,
                #backToTop {
                    display: flex !important;
                    pointer-events: auto !important;
                    cursor: pointer !important;
                    position: fixed !important;
                    z-index: 999998 !important;
                    right: 16px !important;
                    bottom: 90px !important;
                }
                
                /* Navigation elements - PRESERVE FUNCTIONALITY */
                .dropdown,
                .dropdown-menu,
                .mobile-submenu,
                .nav-dropdown,
                .submenu,
                .mobile-expandable {
                    pointer-events: auto !important;
                    transition: all 0.3s ease !important;
                    -webkit-transition: all 0.3s ease !important;
                }
                
                .nav-link,
                .nav-link-mobile,
                .dropdown-toggle,
                .nav-item a {
                    pointer-events: auto !important;
                    cursor: pointer !important;
                    transition: color 0.2s ease, background-color 0.2s ease !important;
                    -webkit-transition: color 0.2s ease, background-color 0.2s ease !important;
                }
                
                /* Hamburger - PRESERVE FUNCTIONALITY */
                .hamburger,
                #hamburger {
                    pointer-events: auto !important;
                    cursor: pointer !important;
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
        
        // Insert at the end of head
        document.head.appendChild(style);
    }

    // ========== DISABLE AOS ONLY ==========
    function disableAOS() {
        // Override AOS if it exists
        if (window.AOS) {
            window.AOS.init = function() {
                console.log('AOS disabled for mobile stability');
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

    // ========== SMART MONITORING ==========
    function startSmartMonitoring() {
        // Check elements every 2 seconds (less aggressive)
        setInterval(() => {
            smartForceEssentialElements();
        }, 2000);
        
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
        console.log('SMART Anti-Shake Enforcer: Starting balanced approach...');
        
        // Apply smart fixes
        injectSmartCSS();
        disableAOS();
        
        // Force essential elements after DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => {
                    smartForceEssentialElements();
                    handleScroll();
                    startSmartMonitoring();
                }, 100);
            });
        } else {
            setTimeout(() => {
                smartForceEssentialElements();
                handleScroll();
                startSmartMonitoring();
            }, 100);
        }

        console.log('SMART Anti-Shake Enforcer: Balanced approach activated');
    }

    // ========== AUTO-INITIALIZE ==========
    init();

    // Export for manual control
    window.AntiShakeEnforcer = {
        init: init,
        smartForceEssentialElements: smartForceEssentialElements,
        injectSmartCSS: injectSmartCSS,
        disableAOS: disableAOS,
        handleScroll: handleScroll
    };

})();