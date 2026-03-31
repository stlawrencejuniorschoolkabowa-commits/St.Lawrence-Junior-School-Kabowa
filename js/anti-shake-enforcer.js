/**
 * HYBRID Anti-Shake Enforcer
 * St. Lawrence Junior School - Kabowa
 * 
 * Nuclear anti-shake with surgical navigation preservation
 */

(function() {
    'use strict';

    // Only run on mobile devices
    if (window.innerWidth > 768) return;

    console.log('HYBRID Anti-Shake Enforcer: Initializing nuclear + navigation...');

    // ========== HYBRID FORCE ESSENTIAL ELEMENTS ========== 
    function hybridForceEssentialElements() {
        // Chatbot - ULTRA FORCE VISIBILITY
        const chatButtons = document.querySelectorAll('.chat-button, #chatButton');
        chatButtons.forEach(button => {
            if (button) {
                // Complete reconstruction for chatbot
                button.style.setProperty('opacity', '1', 'important');
                button.style.setProperty('visibility', 'visible', 'important');
                button.style.setProperty('display', 'flex', 'important');
                button.style.setProperty('pointer-events', 'auto', 'important');
                button.style.setProperty('position', 'fixed', 'important');
                button.style.setProperty('z-index', '999999', 'important');
                button.style.setProperty('right', '16px', 'important');
                button.style.setProperty('bottom', '16px', 'important');
                button.style.setProperty('width', '60px', 'important');
                button.style.setProperty('height', '60px', 'important');
                button.style.setProperty('background', '#0066cc', 'important');
                button.style.setProperty('border-radius', '50%', 'important');
                button.style.setProperty('color', 'white', 'important');
                button.style.setProperty('cursor', 'pointer', 'important');
                button.style.setProperty('align-items', 'center', 'important');
                button.style.setProperty('justify-content', 'center', 'important');
                button.style.setProperty('font-size', '24px', 'important');
                button.style.setProperty('box-shadow', '0 4px 12px rgba(0,0,0,0.3)', 'important');
                button.style.setProperty('transform', 'translate3d(0, 0, 0)', 'important');
                
                console.log('Chatbot HYBRID FORCED visible');
            }
        });

        // Back-to-top - ULTRA FORCE FUNCTIONALITY
        const backToTopButtons = document.querySelectorAll('.back-to-top, #backToTop');
        backToTopButtons.forEach(button => {
            if (button) {
                // Complete reconstruction for back-to-top
                button.style.setProperty('display', 'flex', 'important');
                button.style.setProperty('pointer-events', 'auto', 'important');
                button.style.setProperty('position', 'fixed', 'important');
                button.style.setProperty('z-index', '999998', 'important');
                button.style.setProperty('right', '16px', 'important');
                button.style.setProperty('bottom', '90px', 'important');
                button.style.setProperty('width', '50px', 'important');
                button.style.setProperty('height', '50px', 'important');
                button.style.setProperty('background', '#333', 'important');
                button.style.setProperty('border-radius', '50%', 'important');
                button.style.setProperty('color', 'white', 'important');
                button.style.setProperty('cursor', 'pointer', 'important');
                button.style.setProperty('align-items', 'center', 'important');
                button.style.setProperty('justify-content', 'center', 'important');
                button.style.setProperty('font-size', '20px', 'important');
                button.style.setProperty('box-shadow', '0 4px 12px rgba(0,0,0,0.3)', 'important');
                button.style.setProperty('transform', 'translate3d(0, 0, 0)', 'important');
                
                // Show/hide based on scroll
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > 300) {
                    button.style.setProperty('opacity', '1', 'important');
                    button.style.setProperty('visibility', 'visible', 'important');
                } else {
                    button.style.setProperty('opacity', '0', 'important');
                    button.style.setProperty('visibility', 'hidden', 'important');
                }
                
                console.log('Back-to-top HYBRID FORCED functional');
            }
        });

        // Navigation elements - PRESERVE but ensure functionality
        const navElements = document.querySelectorAll('.dropdown, .dropdown-menu, .mobile-submenu, .nav-dropdown, .submenu, .mobile-expandable, .nav-link, .nav-link-mobile, .dropdown-toggle, .nav-item a');
        navElements.forEach(element => {
            if (element) {
                element.style.setProperty('pointer-events', 'auto', 'important');
                element.style.setProperty('cursor', 'pointer', 'important');
            }
        });

        // Hamburger - PRESERVE FUNCTIONALITY
        const hamburgers = document.querySelectorAll('.hamburger, #hamburger');
        hamburgers.forEach(hamburger => {
            if (hamburger) {
                hamburger.style.setProperty('pointer-events', 'auto', 'important');
                hamburger.style.setProperty('cursor', 'pointer', 'important');
                hamburger.style.setProperty('transform', 'translate3d(0, 0, 0)', 'important');
                
                console.log('Hamburger HYBRID PRESERVED functional');
            }
        });
    }

    // ========== INJECT HYBRID CSS ========== 
    function injectHybridCSS() {
        // Remove any existing override styles
        const existingStyles = document.querySelectorAll('#ultra-aggressive-override, #aggressive-anti-shake, #floating-elements-override, #aggressive-floating-elements-override, #smart-override');
        existingStyles.forEach(style => style.remove());
        
        const style = document.createElement('style');
        style.id = 'hybrid-override';
        style.textContent = `
            /* HYBRID OVERRIDE - NUCLEAR + NAVIGATION */
            @media (max-width: 768px) {
                /* NUCLEAR - Disable all animations */
                *, *::before, *::after {
                    animation: none !important;
                    -webkit-animation: none !important;
                    transition: none !important;
                    -webkit-transition: none !important;
                    transform: translate3d(0, 0, 0) !important;
                    -webkit-transform: translate3d(0, 0, 0) !important;
                }
                
                /* SURGICAL - Only navigation gets transitions */
                .dropdown,
                .dropdown-menu,
                .mobile-submenu,
                .nav-dropdown,
                .submenu,
                .mobile-expandable,
                .nav-menu,
                #navMenu {
                    transition: all 0.3s ease !important;
                    -webkit-transition: all 0.3s ease !important;
                }
                
                .nav-link,
                .nav-link-mobile,
                .dropdown-toggle,
                .nav-item a,
                .hamburger,
                #hamburger {
                    transition: color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease !important;
                    -webkit-transition: color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease !important;
                }
                
                .hamburger span {
                    transition: all 0.3s ease !important;
                    -webkit-transition: all 0.3s ease !important;
                }
                
                /* FORCE ESSENTIAL ELEMENTS */
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
                    width: 60px !important;
                    height: 60px !important;
                    background: #0066cc !important;
                    border-radius: 50% !important;
                    color: white !important;
                    align-items: center !important;
                    justify-content: center !important;
                    font-size: 24px !important;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
                    transform: translate3d(0, 0, 0) !important;
                    -webkit-transform: translate3d(0, 0, 0) !important;
                    transition: opacity 0.3s ease, background-color 0.2s ease !important;
                    -webkit-transition: opacity 0.3s ease, background-color 0.2s ease !important;
                }
                
                .back-to-top,
                #backToTop {
                    display: flex !important;
                    pointer-events: auto !important;
                    cursor: pointer !important;
                    position: fixed !important;
                    z-index: 999998 !important;
                    right: 16px !important;
                    bottom: 90px !important;
                    width: 50px !important;
                    height: 50px !important;
                    background: #333 !important;
                    border-radius: 50% !important;
                    color: white !important;
                    align-items: center !important;
                    justify-content: center !important;
                    font-size: 20px !important;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
                    transform: translate3d(0, 0, 0) !important;
                    -webkit-transform: translate3d(0, 0, 0) !important;
                    transition: opacity 0.3s ease, visibility 0.3s ease !important;
                    -webkit-transition: opacity 0.3s ease, visibility 0.3s ease !important;
                }
                
                /* Ensure all interactive elements work */
                .dropdown,
                .dropdown-menu,
                .mobile-submenu,
                .nav-dropdown,
                .submenu,
                .mobile-expandable,
                .nav-link,
                .nav-link-mobile,
                .dropdown-toggle,
                .nav-item a,
                .hamburger,
                #hamburger,
                .btn,
                button,
                a,
                input,
                textarea,
                select {
                    pointer-events: auto !important;
                    cursor: pointer !important;
                }
            }
        `;
        
        // Insert at the very end of head to override everything
        document.head.appendChild(style);
    }

    // ========== DISABLE AOS COMPLETELY ==========
    function disableAOS() {
        // Override AOS if it exists
        if (window.AOS) {
            window.AOS.init = function() {
                console.log('AOS completely disabled for stability');
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

    // ========== HYBRID MONITORING ==========
    function startHybridMonitoring() {
        // Force elements every 500ms (balanced)
        setInterval(() => {
            hybridForceEssentialElements();
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
        console.log('HYBRID Anti-Shake Enforcer: Starting nuclear + navigation approach...');
        
        // Apply hybrid fixes
        injectHybridCSS();
        disableAOS();
        
        // Force essential elements after DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => {
                    hybridForceEssentialElements();
                    handleScroll();
                    startHybridMonitoring();
                }, 100);
            });
        } else {
            setTimeout(() => {
                hybridForceEssentialElements();
                handleScroll();
                startHybridMonitoring();
            }, 100);
        }

        console.log('HYBRID Anti-Shake Enforcer: Nuclear + navigation approach activated');
    }

    // ========== AUTO-INITIALIZE ==========
    init();

    // Export for manual control
    window.AntiShakeEnforcer = {
        init: init,
        hybridForceEssentialElements: hybridForceEssentialElements,
        injectHybridCSS: injectHybridCSS,
        disableAOS: disableAOS,
        handleScroll: handleScroll
    };

})();