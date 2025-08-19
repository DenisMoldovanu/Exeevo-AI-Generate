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


// Tabs Functionality
// Tab functionality
document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll("[data-tab]");
    const tabPanels = document.querySelectorAll(
        "[id$='-solutions'], [id$='-architecture'], [id$='-innovation'], [id$='-affairs'], [id$='-operations']"
    );

    function activateTab(targetId) {
        // Reset all buttons
        tabButtons.forEach((btn) => {
            btn.classList.remove("active", "text-gray-900");
            btn.classList.add("opacity-50", "text-text-primary");

            const indicator = btn.querySelector("div");
            if (indicator) indicator.classList.replace("opacity-100", "opacity-0");
        });

        // Reset all panels
        tabPanels.forEach((panel) => {
            panel.classList.add("hidden");
            panel.classList.remove("block");
        });

        // Activate selected button
        const activeButton = document.querySelector(`[data-tab="${targetId}"]`);
        if (activeButton) {
            activeButton.classList.remove("opacity-50");
            activeButton.classList.add("active", "text-gray-900");

            const indicator = activeButton.querySelector("div");
            if (indicator) indicator.classList.replace("opacity-0", "opacity-100");
        }

        // Show active panel
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
            targetPanel.classList.remove("hidden");
            targetPanel.classList.add("block");
        }
    }

    // Attach event listeners
    tabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            activateTab(btn.dataset.tab);
        });
    });

    // Activate first tab by default
    if (tabButtons.length > 0) {
        activateTab(tabButtons[0].dataset.tab);
    }
});
