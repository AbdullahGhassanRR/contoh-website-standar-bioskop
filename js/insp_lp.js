
        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
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

        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.style.padding = window.scrollY > 50 ? '10px 5%' : '20px 5%';
            header.style.background = window.scrollY > 50 ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.9)';
        });

        // Promo Slider
        const slides = document.querySelectorAll('.promo-slide');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentSlide = 0;

        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentSlide = (n + slides.length) % slides.length;
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        // Auto slide change every 5 seconds
        setInterval(nextSlide, 5000);

        // Movie Card Hover Effect
        const movieCards = document.querySelectorAll('.movie-card');
        
        movieCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const info = card.querySelector('.movie-info');
                info.style.transform = 'translateY(0)';
            });
            
            card.addEventListener('mouseleave', () => {
                const info = card.querySelector('.movie-info');
                info.style.transform = 'translateY(100%)';
            });
        });
