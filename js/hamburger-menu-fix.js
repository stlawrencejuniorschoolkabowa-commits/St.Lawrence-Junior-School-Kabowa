/**
 * Hamburger Menu Functionality Fix
 * St. Lawrence Junior School - Kabowa
 * 
 * Ensures hamburger menu works consistently across all pages
 */

(function() {
    'use strict';

    // ========== HAMBURGER MENU INITIALIZATION ==========
    function initHamburgerMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        
        if (!hamburger || !navMenu) {
            console.warn('Hamburger menu elements not found');
            return;
        }

        // Remove any existing event listeners to prevent duplicates
        const newHamburger = hamburger.cloneNode(true);
        hamburger.parentNode.replaceChild(newHamburger, hamburger);
        
        // Get the fresh reference
        const freshHamburger = document.getElementById('hamburger');
        
        // ========== HAMBURGER CLICK HANDLER ==========
        freshHamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isActive = navMenu.classList.contains('active');
            
            if (isActive) {
                // Close menu
                freshHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                document.body.classList.remove('menu-open');
            } else {
                // Open menu
                freshHamburger.classList.add('active');
                navMenu.classList.add('active');
                document.body.style.overflow = 'hidden';
                document.body.classList.add('menu-open');
            }
        });

        // ========== CLOSE MENU ON LINK CLICK ==========
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                freshHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                document.body.classList.remove('menu-open');
            });
        });

        // ========== CLOSE MENU ON OUTSIDE CLICK ==========
        document.addEventListener('click', function(e) {
            if (!freshHamburger.contains(e.target) && !navMenu.contains(e.target)) {
                if (navMenu.classList.contains('active')) {
                    freshHamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                    document.body.classList.remove('menu-open');
                }
            }
        });

        // ========== CLOSE MENU ON ESCAPE KEY ==========
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                freshHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                document.body.classList.remove('menu-open');
            }
        });

        // ========== HANDLE WINDOW RESIZE ==========
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                // Close mobile menu on desktop
                freshHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                document.body.classList.remove('menu-open');
            }
        });

        console.log('Hamburger menu initialized successfully');
    }

    // ========== MOBILE EXPANDABLE MENUS ==========
    function initMobileExpandables() {
        const expandables = document.querySelectorAll('.mobile-expandable');
        
        expandables.forEach(expandable => {
            const toggle = expandable.querySelector('.expandable-toggle');
            const submenu = expandable.querySelector('.mobile-submenu');
            
            if (toggle && submenu) {
                toggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const isOpen = expandable.classList.contains('open');
                    
                    // Close all other expandables
                    expandables.forEach(other => {
                        if (other !== expandable) {
                            other.classList.remove('open');
                        }
                    });
                    
                    // Toggle current expandable
                    if (isOpen) {
                        expandable.classList.remove('open');
                    } else {
                        expandable.classList.add('open');
                    }
                });
            }
        });
    }

    // ========== NAVIGATION MENU POSITIONING ==========
    function fixNavigationPositioning() {
        const navMenu = document.getElementById('navMenu');
        if (!navMenu) return;

        // Ensure proper positioning on mobile
        if (window.innerWidth <= 768) {
            navMenu.style.position = 'fixed';
            navMenu.style.top = '0';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.height = '100%';
            navMenu.style.zIndex = '100025';
            navMenu.style.background = 'rgba(0, 0, 0, 0.95)';
            navMenu.style.backdropFilter = 'blur(10px)';
            navMenu.style.transform = 'translateX(-100%)';
            navMenu.style.transition = 'transform 0.3s ease';
        }

        // Active state positioning
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const target = mutation.target;
                    if (target.classList.contains('active')) {
                        target.style.transform = 'translateX(0)';
                    } else {
                        target.style.transform = 'translateX(-100%)';
                    }
                }
            });
        });

        observer.observe(navMenu, { attributes: true });
    }

    // ========== HAMBURGER VISUAL FIXES ==========
    function fixHamburgerVisuals() {
        const hamburger = document.getElementById('hamburger');
        if (!hamburger) return;

        // Ensure hamburger has proper structure
        const spans = hamburger.querySelectorAll('span');
        if (spans.length !== 3) {
            // Create proper hamburger structure
            hamburger.innerHTML = '<span></span><span></span><span></span>';
        }

        // Apply consistent styling
        hamburger.style.display = 'flex';
        hamburger.style.flexDirection = 'column';
        hamburger.style.justifyContent = 'center';
        hamburger.style.alignItems = 'center';
        hamburger.style.gap = '4px';
        hamburger.style.width = '44px';
        hamburger.style.height = '44px';
        hamburger.style.padding = '10px';
        hamburger.style.cursor = 'pointer';
        hamburger.style.zIndex = '100030';

        // Style the spans
        const newSpans = hamburger.querySelectorAll('span');
        newSpans.forEach(span => {
            span.style.width = '20px';
            span.style.height = '2px';
            span.style.background = '#ffffff';
            span.style.borderRadius = '2px';
            span.style.transition = 'all 0.3s ease';
            span.style.transformOrigin = 'center';
        });
    }

    // ========== INITIALIZATION ==========
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(() => {
                    initHamburgerMenu();
                    initMobileExpandables();
                    fixNavigationPositioning();
                    fixHamburgerVisuals();
                }, 100);
            });
        } else {
            setTimeout(() => {
                initHamburgerMenu();
                initMobileExpandables();
                fixNavigationPositioning();
                fixHamburgerVisuals();
            }, 100);
        }

        // Re-initialize on page visibility change (for SPA-like behavior)
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden) {
                setTimeout(() => {
                    initHamburgerMenu();
                    fixHamburgerVisuals();
                }, 200);
            }
        });
    }

    // ========== AUTO-INITIALIZE ==========
    init();

    // Export for manual initialization if needed
    window.HamburgerMenuFix = {
        init: init,
        initHamburgerMenu: initHamburgerMenu,
        initMobileExpandables: initMobileExpandables,
        fixNavigationPositioning: fixNavigationPositioning,
        fixHamburgerVisuals: fixHamburgerVisuals
    };

})();