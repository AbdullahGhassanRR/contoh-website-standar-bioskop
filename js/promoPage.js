
        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.style.padding = window.scrollY > 50 ? '10px 5%' : '20px 5%';
            header.style.background = window.scrollY > 50 ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.9)';
        });

        // Promo Carousel
        const track = document.querySelector('.carousel-track');
        const slides = document.querySelectorAll('.promo-slide');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentSlide = 0;

        function updateCarousel() {
            const slideWidth = slides[0].clientWidth;
            track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateCarousel();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateCarousel();
        }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
        });

        // auto slide
        const carousel = document.querySelector('.promo-carousel');

        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoSlide); // Pause on hover
        });

        carousel.addEventListener('mouseleave', () => {
            autoSlide = setInterval(nextSlide, 5000); // Resume on leave
        });



        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                if(navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

