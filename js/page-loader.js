/**
 * Page Loader Script
 * Hides loader quickly and reliably on all devices.
 */

(function () {
    const loader = document.getElementById('pageLoader');
    if (!loader) return;

    let hidden = false;

    function hideLoader(delayMs) {
        if (hidden) return;
        hidden = true;

        setTimeout(function () {
            loader.classList.add('hidden');
            setTimeout(function () {
                window.dispatchEvent(new Event('loaderHidden'));
            }, 300);
        }, delayMs);
    }

    // Preferred: hide shortly after DOM is interactive.
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            hideLoader(900);
        }, { once: true });
    } else {
        hideLoader(900);
    }

    // Backup: if page fully loads earlier/later, still hide promptly.
    window.addEventListener('load', function () {
        hideLoader(700);
    }, { once: true });

    // Hard fallback: never keep loader forever on slow networks.
    setTimeout(function () {
        hideLoader(0);
    }, 3000);
})();
