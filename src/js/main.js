// Main JavaScript file for Exeevo site
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        if (mobileMenu && !mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Tab functionality
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabPanels = document.querySelectorAll('[id$="-solutions"], [id$="-architecture"], [id$="-innovation"], [id$="-affairs"], [id$="-operations"]');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.add('opacity-50');
                const indicator = btn.querySelector('div');
                if (indicator) indicator.classList.remove('opacity-100');
            });
            tabPanels.forEach(panel => {
                panel.classList.remove('block');
                panel.classList.add('hidden');
            });

            // Add active class to clicked button and target panel
            this.classList.remove('opacity-50');
            this.classList.add('active');
            const indicator = this.querySelector('div');
            if (indicator) indicator.classList.add('opacity-100');

            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.remove('hidden');
                targetPanel.classList.add('block');
            }
        });
    });

    // Add any interactive functionality here

    // Example: Button click handler
    const exploreButton = document.querySelector('.btn-secondary');
    if (exploreButton) {
        exploreButton.addEventListener('click', function () {
            console.log('Explore solutions button clicked');
            // Add your button functionality here
        });
    }
});


