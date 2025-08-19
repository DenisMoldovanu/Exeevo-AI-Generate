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

    // Case Studies Swiper functionality
    const caseStudiesSwiper = new Swiper('.case-studies-swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: false,
        autoplay: false,
        speed: 300,
        effect: 'slide',
        
        // Responsive breakpoints
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 32,
            }
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + ' w-2 h-2 bg-gray-300 rounded-full"></span>';
            },
        },

        // Update counter
        on: {
            slideChange: function () {
                const counter = document.querySelector('.swiper-counter');
                if (counter) {
                    counter.textContent = `${this.realIndex + 1} / ${this.slides.length}`;
                }
            },
        },
    });

    // Custom pagination styling
    const paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');
    paginationBullets.forEach((bullet, index) => {
        if (index === 0) {
            bullet.classList.add('bg-text-primary');
        }
    });

    // Update pagination on slide change
    caseStudiesSwiper.on('slideChange', function () {
        paginationBullets.forEach((bullet, index) => {
            bullet.classList.toggle('bg-text-primary', index === this.realIndex);
            bullet.classList.toggle('bg-gray-300', index !== this.realIndex);
        });
    });

    // Resources Swiper functionality
    const resourcesSwiper = new Swiper('.resources-swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: false,
        autoplay: false,
        speed: 300,
        effect: 'slide',
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + ' w-2 h-2 bg-gray-300 rounded-full"></span>';
            },
        },

        // Update counter
        on: {
            slideChange: function () {
                const counter = document.querySelector('.resources-swiper .swiper-counter');
                if (counter) {
                    counter.textContent = `${this.realIndex + 1} / ${this.slides.length}`;
                }

                // Update navigation button opacity
                const prevButton = document.querySelector('.resources-swiper .swiper-button-prev');
                const nextButton = document.querySelector('.resources-swiper .swiper-button-next');

                if (this.isBeginning) {
                    prevButton.classList.add('opacity-30');
                    prevButton.classList.remove('hover:opacity-100');
                } else {
                    prevButton.classList.remove('opacity-30');
                    prevButton.classList.add('hover:opacity-100');
                }

                if (this.isEnd) {
                    nextButton.classList.add('opacity-30');
                    nextButton.classList.remove('hover:opacity-100');
                } else {
                    nextButton.classList.remove('opacity-30');
                    nextButton.classList.add('hover:opacity-100');
                }
            },
            init: function () {
                // Initial update of counter and button opacity
                const counter = document.querySelector('.resources-swiper .swiper-counter');
                if (counter) {
                    counter.textContent = `${this.realIndex + 1} / ${this.slides.length}`;
                }

                const prevButton = document.querySelector('.resources-swiper .swiper-button-prev');
                const nextButton = document.querySelector('.resources-swiper .swiper-button-next');

                if (this.isBeginning) {
                    prevButton.classList.add('opacity-30');
                    prevButton.classList.remove('hover:opacity-100');
                } else {
                    prevButton.classList.remove('opacity-30');
                    prevButton.classList.add('hover:opacity-100');
                }

                if (this.isEnd) {
                    nextButton.classList.add('opacity-30');
                    nextButton.classList.remove('hover:opacity-100');
                } else {
                    nextButton.classList.remove('opacity-30');
                    nextButton.classList.add('hover:opacity-100');
                }
            }
        },
    });

    // Resources pagination styling
    const resourcesPaginationBullets = document.querySelectorAll('.resources-swiper .swiper-pagination-bullet');
    resourcesPaginationBullets.forEach((bullet, index) => {
        if (index === 0) {
            bullet.classList.add('bg-text-primary');
        }
    });

    // Update resources pagination on slide change
    resourcesSwiper.on('slideChange', function () {
        resourcesPaginationBullets.forEach((bullet, index) => {
            bullet.classList.toggle('bg-text-primary', index === this.realIndex);
            bullet.classList.toggle('bg-gray-300', index !== this.realIndex);
        });
    });
});


