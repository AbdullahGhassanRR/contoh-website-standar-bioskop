
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

        // Movie Filtering
        const filterBtns = document.querySelectorAll('.filter-btn');
        const movieCards = document.querySelectorAll('.movie-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.dataset.filter;
                
                // Filter movies
                movieCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Trailer Modal
        const trailerBtns = document.querySelectorAll('.trailer-btn');
        const modal = document.getElementById('trailerModal');
        const modalVideo = document.querySelector('.modal-video');
        const closeModal = document.querySelector('.close-modal');

        trailerBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const trailerUrl = btn.dataset.trailer;
                modalVideo.src = trailerUrl;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
            modalVideo.src = '';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                modalVideo.src = '';
                document.body.style.overflow = 'auto';
            }
        });

        // Showtime Selection
        const showtimeBtns = document.querySelectorAll('.showtime-btn');
        
        showtimeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                showtimeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                btn.style.backgroundColor = 'var(--primary-color)';
                btn.style.color = 'var(--secondary-color)';
            });
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
