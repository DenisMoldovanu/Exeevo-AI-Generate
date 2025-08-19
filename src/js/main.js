// Main JavaScript file for Exeevo site
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && !mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
    
    // Add any interactive functionality here
    
    // Example: Button click handler
    const exploreButton = document.querySelector('.btn-secondary');
    if (exploreButton) {
        exploreButton.addEventListener('click', function() {
            console.log('Explore solutions button clicked');
            // Add your button functionality here
        });
    }
});


