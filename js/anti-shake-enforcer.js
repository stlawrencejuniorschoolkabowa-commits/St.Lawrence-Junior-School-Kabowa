/**
 * ULTRA AGGRESSIVE Anti-Shake Enforcer
 * St. Lawrence Junior School - Kabowa
 * 
 * Forces essential elements to be visible with maximum priority
 */

(function() {
    'use strict';

    // Only run on mobile devices
    if (window.innerWidth > 768) return;

    console.log('ULTRA AGGRESSIVE Anti-Shake Enforcer: Initializing...');

    // ========== ULTRA FORCE ESSENTIAL ELEMENTS ========== 
    function ultraForceEssentialElements() {
        // Chatbot - ULTRA FORCE VISIBILITY
        const chatButtons = document.querySelectorAll('.chat-button, #chatButton');
        chatButtons.forEach(button => {
            if (button) {
                // Remove any conflicting styles first
                button.removeAttribute('style');
                
                // Force with maximum priority
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
                
                // Ensure it's not hidden by any parent
                let parent = button.parentElement;
                while (parent && parent !== document.body) {
                    parent.style.setProperty('overflow', 'visible', 'important');
                    parent = parent.parentElement;
                }
                
                console.log('Chatbot ULTRA FORCED visible');
            }
        });

        // Back-to-top - ULTRA FORCE FUNCTIONALITY
        const backToTopButtons = document.querySelectorAll('.back-to-top, #backToTop');
        backToTopButtons.forEach(button => {
            if (button) {
                // Remove any conflicting styles first
                button.removeAttribute('style');
                
                // Force with maximum priority
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
                
                // Show/hide based on scroll
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > 300) {
                    button.style.setProperty('opacity', '1', 'important');
                    button.style.setProperty('visibility', 'visible', 'important');
                } else {
                    button.style.setProperty('opacity', '0', 'important');
                    button.style.setProperty('visibility', 'hidden', 'important');
                }
                
                // Ensure it's not hidden by any parent
                let parent = button.parentElement;
                while (parent && parent !== document.body) {
                    parent.style.setProperty('overflow', 'visible', 'important');
                    parent = parent.parentElement;
                }
                
                console.log('Back-to-top ULTRA FORCED functional');
            }
        });

        // Hamburger - ULTRA FORCE FUNCTIONALITY
        const hamburgers = document.querySelectorAll('.hamburger, #hamburger');
        hamburgers.forEach(hamburger => {
            if (hamburger) {
                hamburger.style.setProperty('pointer-events', 'auto', 'important');
                hamburger.style.setProperty('cursor', 'pointer', 'important');
                hamburger.style.setProperty('position', 'fixed', 'important');
                hamburger.style.setProperty('z-index', '999997', 'important');
                hamburger.style.setProperty('top', '16px', 'important');
                hamburger.style.setProperty('right', '16px', 'important');
                
                console.log('Hamburger ULTRA FORCED functional');
            }
        });
    }

    // ========== INJECT ULTRA AGGRESSIVE CSS ========== 
    function injectUltraAggressiveCSS() {
        // Remove any existing override styles
        const existingStyles = document.querySelectorAll('#ultra-aggressive-override, #aggressive-anti-shake, #floating-elements-override, #aggressive-floating-elements-override');
        existingStyles.forEach(style => style.remove());
        
        const style = document.createElement('style');
        style.id = 'ultra-aggressive-override';
        style.textContent = `
            /* ULTRA AGGRESSIVE OVERRIDE - MAXIMUM PRIORITY */
            @media (max-width: 768px) {
                /* Chatbot - ULTRA HIGH PRIORITY */
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
                }
                
                /* Back-to-top - ULTRA HIGH PRIORITY */
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
                }
                
                /* Hamburger - ULTRA HIGH PRIORITY */
                .hamburger,
                #hamburger {
                    pointer-events: auto !important;
                    cursor: pointer !important;
                    position: fixed !important;
                    z-index: 999997 !important;
                    top: 16px !important;
                    right: 16px !important;
                    transform: translate3d(0, 0, 0) !important;
                    -webkit-transform: translate3d(0, 0, 0) !important;
                }
                
                /* Ensure parent containers don't hide elements */
                body, html, .container, .wrapper, .main, .content {
                    overflow: visible !important;
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

    // ========== ULTRA AGGRESSIVE MONITORING ==========
    function startUltraAggressiveMonitoring() {
        // Force elements every 100ms for maximum responsiveness
        setInterval(() => {
            ultraForceEssentialElements();
        }, 100);
        
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
        console.log('ULTRA AGGRESSIVE Anti-Shake Enforcer: Starting maximum force approach...');
        
        // Apply all fixes immediately
        injectUltraAggressiveCSS();
        disableAOS();
        
        // Force essential elements after DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => {
                    ultraForceEssentialElements();
                    handleScroll();
                    startUltraAggressiveMonitoring();
                }, 50);
            });
        } else {
            setTimeout(() => {
                ultraForceEssentialElements();
                handleScroll();
                startUltraAggressiveMonitoring();
            }, 50);
        }

        console.log('ULTRA AGGRESSIVE Anti-Shake Enforcer: Maximum force activated');
    }

    // ========== AUTO-INITIALIZE ==========
    init();

    // Export for manual control
    window.AntiShakeEnforcer = {
        init: init,
        ultraForceEssentialElements: ultraForceEssentialElements,
        injectUltraAggressiveCSS: injectUltraAggressiveCSS,
        disableAOS: disableAOS,
        handleScroll: handleScroll
    };

})();