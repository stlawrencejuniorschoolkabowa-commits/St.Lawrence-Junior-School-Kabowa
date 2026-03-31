/**
 * Anti-Shake Enforcer
 * St. Lawrence Junior School - Kabowa
 * 
 * Aggressively prevents all shaking animations on mobile devices
 * This script intercepts and blocks any animations that could cause shaking
 */

(function() {
    'use strict';

    // Only run on mobile devices
    if (window.innerWidth > 768) return;

    console.log('Anti-Shake Enforcer: Initializing...');

    // ========== DISABLE ALL ANIMATIONS ==========
    function disableAllAnimations() {
        // Create aggressive anti-animation stylesheet
        const style = document.createElement('style');
        style.id = 'anti-shake-enforcer';
        style.textContent = `
            /* EMERGENCY ANTI-SHAKE RULES */
            * {
                animation: none !important;
                -webkit-animation: none !important;
                transition: none !important;
                -webkit-transition: none !important;
                transform: translate3d(0, 0, 0) !important;
                -webkit-transform: translate3d(0, 0, 0) !important;
            }
            
            /* Only allow opacity for essential feedback */
            .chat-button, .back-to-top, .hamburger, .btn, button {
                transition: opacity 0.1s ease !important;
                -webkit-transition: opacity 0.1s ease !important;
            }
        `;
        
        // Insert at the very end to override everything
        document.head.appendChild(style);
    }

    // ========== INTERCEPT ANIMATION METHODS ==========
    function interceptAnimationMethods() {
        // Override Element.animate()
        if (Element.prototype.animate) {
            Element.prototype.animate = function() {
                console.warn('Animation blocked by Anti-Shake Enforcer');
                return { cancel: function() {}, finish: function() {} };
            };
        }

        // Override requestAnimationFrame for problematic animations
        const originalRAF = window.requestAnimationFrame;
        window.requestAnimationFrame = function(callback) {
            // Allow essential animations but block others
            return originalRAF.call(window, function(timestamp) {
                try {
                    callback(timestamp);
                } catch (e) {
                    console.warn('Animation callback blocked:', e);
                }
            });
        };
    }

    // ========== BLOCK CSS ANIMATION EVENTS ==========
    function blockAnimationEvents() {
        const animationEvents = [
            'animationstart',
            'animationend',
            'animationiteration',
            'transitionstart',
            'transitionend',
            'transitionrun',
            'transitioncancel'
        ];

        animationEvents.forEach(eventType => {
            document.addEventListener(eventType, function(e) {
                // Block problematic animations
                if (e.target && !isEssentialElement(e.target)) {
                    e.stopPropagation();
                    e.preventDefault();
                }
            }, true);
        });
    }

    // ========== CHECK IF ELEMENT IS ESSENTIAL ==========
    function isEssentialElement(element) {
        const essentialClasses = [
            'chat-button',
            'back-to-top', 
            'hamburger',
            'page-loader'
        ];
        
        return essentialClasses.some(className => 
            element.classList && element.classList.contains(className)
        );
    }

    // ========== FORCE STABLE TRANSFORMS ==========
    function forceStableTransforms() {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    const element = mutation.target;
                    
                    // Force stable transform on any element that gets a transform
                    if (element.style.transform && element.style.transform !== 'translate3d(0px, 0px, 0px)') {
                        if (!isEssentialElement(element)) {
                            element.style.transform = 'translate3d(0px, 0px, 0px)';
                            element.style.webkitTransform = 'translate3d(0px, 0px, 0px)';
                        }
                    }
                }
            });
        });

        observer.observe(document.body, {
            attributes: true,
            subtree: true,
            attributeFilter: ['style', 'class']
        });
    }

    // ========== STABILIZE FLOATING ELEMENTS ==========
    function stabilizeFloatingElements() {
        const floatingElements = [
            '.chat-button',
            '.back-to-top',
            '.hamburger'
        ];

        floatingElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                // Force stable positioning
                element.style.transform = 'translate3d(0px, 0px, 0px)';
                element.style.webkitTransform = 'translate3d(0px, 0px, 0px)';
                element.style.backfaceVisibility = 'hidden';
                element.style.webkitBackfaceVisibility = 'hidden';
                element.style.willChange = 'opacity';
                
                // Remove any existing animation classes
                element.classList.remove('animate__animated', 'aos-animate');
                
                // Override any inline animations
                element.style.animation = 'none';
                element.style.webkitAnimation = 'none';
            });
        });
    }

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

    // ========== OVERRIDE PROBLEMATIC LIBRARIES ==========
    function overrideProblematicLibraries() {
        // Override jQuery animations if present
        if (window.jQuery) {
            window.jQuery.fn.animate = function() {
                console.warn('jQuery animation blocked');
                return this;
            };
        }

        // Override GSAP if present
        if (window.gsap) {
            window.gsap.to = function() {
                console.warn('GSAP animation blocked');
                return { kill: function() {} };
            };
            window.gsap.from = function() {
                console.warn('GSAP animation blocked');
                return { kill: function() {} };
            };
        }
    }

    // ========== STABILIZE IMAGES ==========
    function stabilizeImages() {
        const images = document.querySelectorAll('img, picture, svg');
        images.forEach(img => {
            img.style.transform = 'translate3d(0px, 0px, 0px)';
            img.style.webkitTransform = 'translate3d(0px, 0px, 0px)';
            img.style.backfaceVisibility = 'hidden';
            img.style.webkitBackfaceVisibility = 'hidden';
            img.style.willChange = 'auto';
            img.style.animation = 'none';
            img.style.webkitAnimation = 'none';
            img.style.transition = 'none';
            img.style.webkitTransition = 'none';
        });
    }

    // ========== PREVENT HOVER EFFECTS ==========
    function preventHoverEffects() {
        // Override CSS hover effects with JavaScript
        const hoverElements = document.querySelectorAll('*');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', function(e) {
                e.preventDefault();
                e.stopPropagation();
            }, true);
            
            element.addEventListener('mouseover', function(e) {
                e.preventDefault();
                e.stopPropagation();
            }, true);
        });
    }

    // ========== CONTINUOUS MONITORING ==========
    function startContinuousMonitoring() {
        setInterval(() => {
            stabilizeFloatingElements();
            stabilizeImages();
            
            // Check for any elements with transforms
            const elementsWithTransforms = document.querySelectorAll('*');
            elementsWithTransforms.forEach(element => {
                const computedStyle = window.getComputedStyle(element);
                if (computedStyle.transform && computedStyle.transform !== 'none' && computedStyle.transform !== 'matrix(1, 0, 0, 1, 0, 0)') {
                    if (!isEssentialElement(element)) {
                        element.style.transform = 'translate3d(0px, 0px, 0px)';
                        element.style.webkitTransform = 'translate3d(0px, 0px, 0px)';
                    }
                }
            });
        }, 100); // Check every 100ms
    }

    // ========== INITIALIZATION ==========
    function init() {
        console.log('Anti-Shake Enforcer: Starting aggressive anti-shake measures...');
        
        // Apply all fixes immediately
        disableAllAnimations();
        interceptAnimationMethods();
        blockAnimationEvents();
        forceStableTransforms();
        disableAOS();
        overrideProblematicLibraries();
        preventHoverEffects();
        
        // Apply fixes after DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => {
                    stabilizeFloatingElements();
                    stabilizeImages();
                    startContinuousMonitoring();
                }, 100);
            });
        } else {
            setTimeout(() => {
                stabilizeFloatingElements();
                stabilizeImages();
                startContinuousMonitoring();
            }, 100);
        }

        console.log('Anti-Shake Enforcer: All measures activated');
    }

    // ========== AUTO-INITIALIZE ==========
    init();

    // Export for manual control
    window.AntiShakeEnforcer = {
        init: init,
        disableAllAnimations: disableAllAnimations,
        stabilizeFloatingElements: stabilizeFloatingElements,
        stabilizeImages: stabilizeImages,
        forceStableTransforms: forceStableTransforms
    };

})();