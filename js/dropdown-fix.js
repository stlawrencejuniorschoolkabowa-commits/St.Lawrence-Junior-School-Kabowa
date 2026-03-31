/**
 * Dropdown Navigation Fix
 * St. Lawrence Junior School - Kabowa
 * 
 * Ensures dropdown menus work on both desktop and mobile
 */

(function() {
    'use strict';

    console.log('Dropdown Fix: Initializing...');

    // ========== DESKTOP DROPDOWN FUNCTIONALITY ==========
    function initDesktopDropdowns() {
        const dropdowns = document.querySelectorAll('.nav-dropdown');
        
        dropdowns.forEach(dropdown => {
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            const dropdownLink = dropdown.querySelector('.nav-link');
            
            if (!dropdownMenu || !dropdownLink) return;
            
            let hoverTimeout;
            
            // Mouse enter - show dropdown
            dropdown.addEventListener('mouseenter', function() {
                clearTimeout(hoverTimeout);
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.visibility = 'visible';
                dropdownMenu.style.transform = 'translateY(0)';
                dropdown.classList.add('dropdown-active');
                
                console.log('Desktop dropdown opened');
            });
            
            // Mouse leave - hide dropdown with delay
            dropdown.addEventListener('mouseleave', function() {
                hoverTimeout = setTimeout(() => {
                    dropdownMenu.style.opacity = '0';
                    dropdownMenu.style.visibility = 'hidden';
                    dropdownMenu.style.transform = 'translateY(-10px)';
                    dropdown.classList.remove('dropdown-active');
                    
                    console.log('Desktop dropdown closed');
                }, 150); // Small delay to prevent flickering
            });
            
            // Click functionality for touch devices
            dropdownLink.addEventListener('click', function(e) {
                // On touch devices or if dropdown is not visible, prevent default and toggle
                if ('ontouchstart' in window || dropdownMenu.style.visibility !== 'visible') {
                    e.preventDefault();
                    
                    const isVisible = dropdownMenu.style.visibility === 'visible';
                    
                    // Close all other dropdowns first
                    document.querySelectorAll('.nav-dropdown .dropdown-menu').forEach(menu => {
                        if (menu !== dropdownMenu) {
                            menu.style.opacity = '0';
                            menu.style.visibility = 'hidden';
                            menu.style.transform = 'translateY(-10px)';
                            menu.parentElement.classList.remove('dropdown-active');
                        }
                    });
                    
                    // Toggle current dropdown
                    if (isVisible) {
                        dropdownMenu.style.opacity = '0';
                        dropdownMenu.style.visibility = 'hidden';
                        dropdownMenu.style.transform = 'translateY(-10px)';
                        dropdown.classList.remove('dropdown-active');
                    } else {
                        dropdownMenu.style.opacity = '1';
                        dropdownMenu.style.visibility = 'visible';
                        dropdownMenu.style.transform = 'translateY(0)';
                        dropdown.classList.add('dropdown-active');
                    }
                    
                    console.log('Desktop dropdown toggled via click');
                }
            });
        });
    }

    // ========== MOBILE EXPANDABLE FUNCTIONALITY ==========
    function initMobileExpandables() {
        const expandables = document.querySelectorAll('.mobile-expandable');
        
        expandables.forEach(expandable => {
            const toggle = expandable.querySelector('.nav-link-mobile');
            const submenu = expandable.querySelector('.mobile-submenu');
            const icon = expandable.querySelector('.mobile-expand-icon');
            
            if (!toggle || !submenu) return;
            
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const isOpen = expandable.classList.contains('active');
                
                // Close all other expandables
                expandables.forEach(other => {
                    if (other !== expandable) {
                        other.classList.remove('active');
                        const otherIcon = other.querySelector('.mobile-expand-icon');
                        if (otherIcon) otherIcon.textContent = '+';
                    }
                });
                
                // Toggle current expandable
                if (isOpen) {
                    expandable.classList.remove('active');
                    if (icon) icon.textContent = '+';
                } else {
                    expandable.classList.add('active');
                    if (icon) icon.textContent = '−';
                }
                
                console.log('Mobile expandable toggled');
            });
        });
    }

    // ========== CLOSE DROPDOWNS ON OUTSIDE CLICK ==========
    function initOutsideClickClose() {
        document.addEventListener('click', function(e) {
            // Close desktop dropdowns
            if (!e.target.closest('.nav-dropdown')) {
                document.querySelectorAll('.nav-dropdown .dropdown-menu').forEach(menu => {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                    menu.style.transform = 'translateY(-10px)';
                    menu.parentElement.classList.remove('dropdown-active');
                });
            }
            
            // Close mobile expandables when clicking outside nav menu
            if (!e.target.closest('.nav-menu')) {
                document.querySelectorAll('.mobile-expandable').forEach(expandable => {
                    expandable.classList.remove('active');
                    const icon = expandable.querySelector('.mobile-expand-icon');
                    if (icon) icon.textContent = '+';
                });
            }
        });
    }

    // ========== ENSURE DROPDOWN STYLES ==========
    function ensureDropdownStyles() {
        const style = document.createElement('style');
        style.id = 'dropdown-fix-styles';
        style.textContent = `
            /* Ensure dropdown menus work properly */
            .nav-dropdown {
                position: relative;
            }
            
            .dropdown-menu {
                position: absolute;
                top: 100%;
                left: 0;
                background: white;
                border-radius: 8px;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: all 0.3s ease;
                z-index: 1000;
                min-width: 200px;
                padding: 10px 0;
                margin-top: 5px;
            }
            
            .nav-dropdown:hover .dropdown-menu,
            .nav-dropdown.dropdown-active .dropdown-menu {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            
            .dropdown-menu li {
                list-style: none;
            }
            
            .dropdown-menu li a {
                display: block;
                padding: 12px 20px;
                color: #333;
                text-decoration: none;
                transition: all 0.2s ease;
                border-left: 3px solid transparent;
            }
            
            .dropdown-menu li a:hover {
                background: linear-gradient(90deg, rgba(0, 102, 204, 0.1) 0%, transparent 100%);
                border-left-color: #0066cc;
                color: #0066cc;
            }
            
            /* Mobile expandable styles */
            .mobile-expandable .mobile-submenu {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease;
                background: rgba(255, 255, 255, 0.1);
                margin-top: 10px;
                border-radius: 8px;
            }
            
            .mobile-expandable.active .mobile-submenu {
                max-height: 200px;
            }
            
            .mobile-expand-icon {
                font-size: 1.2rem;
                font-weight: bold;
                transition: transform 0.3s ease;
            }
            
            .mobile-expandable.active .mobile-expand-icon {
                transform: rotate(180deg);
            }
            
            /* Ensure dropdowns work with anti-shake CSS */
            @media (max-width: 768px) {
                .dropdown-menu,
                .mobile-submenu,
                .nav-dropdown,
                .mobile-expandable {
                    transition: all 0.3s ease !important;
                    -webkit-transition: all 0.3s ease !important;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    // ========== INITIALIZATION ==========
    function init() {
        console.log('Dropdown Fix: Starting initialization...');
        
        // Apply styles first
        ensureDropdownStyles();
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => {
                    initDesktopDropdowns();
                    initMobileExpandables();
                    initOutsideClickClose();
                }, 100);
            });
        } else {
            setTimeout(() => {
                initDesktopDropdowns();
                initMobileExpandables();
                initOutsideClickClose();
            }, 100);
        }

        console.log('Dropdown Fix: Initialized');
    }

    // ========== AUTO-INITIALIZE ==========
    init();

    // Export for manual control
    window.DropdownFix = {
        init: init,
        initDesktopDropdowns: initDesktopDropdowns,
        initMobileExpandables: initMobileExpandables,
        ensureDropdownStyles: ensureDropdownStyles
    };

})();