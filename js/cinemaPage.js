
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

        // Carousel Functionality
        const track = document.querySelector('.carousel');
        const slides = document.querySelectorAll('.cinema-card');
        const indicators = document.querySelectorAll('.indicator');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentSlide = 0;
        // const cardCount = document.querySelectorAll('.cinema-card').length;

        function updateCarousel() {
            const slideWidth = slides[0].clientWidth;
            track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
            
            // Update indicators
            // indicators.forEach((indicator, index) => {
            //     if (index === currentIndex) {
            //         indicator.classList.add('active');
            //     } else {
            //         indicator.classList.remove('active');
            //     }
            // });
            indicators.forEach(dot => dot.classList.remove('active'));
            indicators[currentSlide].classList.add('active');
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
        
        
        // Next button
        // nextBtn.addEventListener('click', () => {
        //     currentIndex = (currentIndex + 1) % carousel.length ;
        //     updateCarousel();
        // });

        // Previous button
        // prevBtn.addEventListener('click', () => {
        //     currentIndex = (currentIndex - 1 + cardCount) % cardCount;
        //     updateCarousel();
        // });

         indicators.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
        });

        // Indicator clicks
        // indicators.forEach(indicator => {
        //     indicator.addEventListener('click', () => {
        //         currentIndex = parseInt(indicator.dataset.index);
        //         updateCarousel();
        //     });
        // });

        // Auto-advance carousel
        // let autoSlide = setInterval(() => {
        //     currentIndex = (currentIndex + 1) % cardCount;
        //     updateCarousel();
        // }, 5000);

        // Pause auto-advance on hover
        const carouselC = document.querySelector('.carousel-container');
        carouselC.addEventListener('mouseenter', () => {
            clearInterval(autoSlide); // Pause on hover
        });

        carouselC.addEventListener('mouseleave', () => {
            autoSlide = setInterval(nextSlide, 5000); // Resume on leave
        });

        // carouselContainer.addEventListener('mouseenter', () => {
        //     clearInterval(autoSlide);
        // });

        // carouselContainer.addEventListener('mouseleave', () => {
        //     autoSlide = setInterval(() => {
        //         currentIndex = (currentIndex + 1) % cardCount;
        //         updateCarousel();
        //     }, 5000);
        // });

        // Touch support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        carouselContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carouselContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                // Swipe left - next
                currentIndex = (currentIndex + 1) % cardCount;
                updateCarousel();
            }
            
            if (touchEndX > touchStartX + 50) {
                // Swipe right - previous
                currentIndex = (currentIndex - 1 + cardCount) % cardCount;
                updateCarousel();
            }
        }

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
