        
        // update header "hero" backgroun
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        const hero = document.querySelector('.hero');
        const images = [
            '../../assets/img/banner.jpg',
            '../../assets/img/premium-cinema.jpg',
            '../../assets/img/metropole-xxi.jpg',
        ];
        let current = 0;
        function updateHeroBackground() {
            const imageUrl = images[current];

            hero.style.background = `
                linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                url(${imageUrl}) no-repeat center center / cover
            `;
            current = (current + 1) % images.length;
        }
        updateHeroBackground();
        setInterval(updateHeroBackground, 5000);


        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

       

        // Coming Soon Movies Data
        // const comingSoon = [
        //     {
        //         title: "The Marvels",
        //         poster: "https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
        //         releaseDate: "November 10, 2023"
        //     },
        //     {
        //         title: "Dune: Part Two",
        //         poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
        //         releaseDate: "March 15, 2024"
        //     },
        //     {
        //         title: "Wonka",
        //         poster: "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
        //         releaseDate: "December 15, 2023"
        //     },
        //     {
        //         title: "Killers of the Flower Moon",
        //         poster: "https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
        //         releaseDate: "October 20, 2023"
        //     },
        //     {
        //         title: "Napoleon",
        //         poster: "https://image.tmdb.org/t/p/w500/jE5oqyQhwyEn2fFHjWjSCj5yqy5.jpg",
        //         releaseDate: "November 22, 2023"
        //     }
        // ];
;
        
        // movies.forEach(movie => {
        //     const movieCard = document.createElement('div');
        //     movieCard.className = 'movie-card';
        //     movieCard.innerHTML = `
        //         <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
        //         <div class="movie-info">
        //             <h3 class="movie-title">${movie.title}</h3>
        //             <div class="movie-meta">
        //                 <span>${movie.genre}</span>
        //                 <span>${movie.duration}</span>
        //             </div>
        //             <div class="movie-rating">
        //                 ${'★'.repeat(Math.floor(movie.rating / 2))}${'☆'.repeat(5 - Math.floor(movie.rating / 2))} (${movie.rating}/10)
        //             </div>
        //             <a href="#" class="btn">Book Now</a>
        //         </div>
        //     `;
        //     moviesContainer.appendChild(movieCard);
        // });

        // // Load Coming Soon Movies
        // const comingSoonContainer = document.getElementById('comingSoonContainer');
        
        // comingSoon.forEach(movie => {
        //     const comingSoonCard = document.createElement('div');
        //     comingSoonCard.className = 'coming-soon-card';
        //     comingSoonCard.innerHTML = `
        //         <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
        //         <div class="coming-soon-overlay">
        //             <div class="release-date">${movie.releaseDate}</div>
        //             <a href="#" class="btn">Notify Me</a>
        //         </div>
        //     `;
        //     comingSoonContainer.appendChild(comingSoonCard);
        // });



        // now showing movies 
        const moviesCard = [{
            title: "Until Dawn",
            image: "../../assets/img/until-dawn.webp",
            rated: "R",
            duration: "2h 15m"
        },
        {title: "The Last of Us",
            image: "../../assets/img/the-last-of-us.webp",
            rated: "R",
            duration: "1h 45m"},
        {title: "Mission Impossible: The Final Reckoning",
            image: "../../assets/img/mission-imposible.webp",
            rated: "PG",
            duration: "2h 30m"},
        {title: "Thunderbolts*",
            image: "../../assets/img/thunderbolts.webp",
            rated: "G",
            duration: "1h 55m"},
        {title: "From the World of John Wick: Ballerina",
            image: "../../assets/img/ballerina.webp",
            rated: "R",
            duration: "2h 05m"},
        {title: "Captain America: Brave New World",
            image: "../../assets/img/captain-america-5.webp",
            rated: "PG-13",
            duration: "2h 22m"},
            
        ];


        const moviesGrid = document.querySelector('.movies-grid');

        
        moviesCard.forEach(movie =>{
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `
            <img src=${movie.image} class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.rated}</span>
                    <span>${movie.duration}</span>
                </div>
            `;
            moviesGrid.appendChild(movieCard);
        })
        // <div class="movies-grid">
        //     <div class="movie-card">
        //         <img src="../../assets/img/until-dawn.webp"alt="Movie 1" class="movie-poster">
        //         <div class="movie-info">
        //             <h3 class="movie-title">Until Dawn</h3>
        //             <div class="movie-meta">
        //                 <span>R</span>
        //                 <span>2h 15m</span>
        //             </div>
        //         </div>
        //     </div>

    function handleNavLinksVisibility() {
        const header = document.querySelector('header');
        const navLinks = document.getElementById('navLinks');

        if (window.scrollY > 435) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.padding = '15px 5%';
        } else {
            header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.5))';
            header.style.padding = '20px 5%';
        }
    }

    // Jalankan saat halaman baru dibuka
    window.addEventListener('DOMContentLoaded', handleNavLinksVisibility);

// Jalankan nav saat user scroll
    window.addEventListener('scroll', handleNavLinksVisibility);

        // Header Scroll Effect
        // window.addEventListener('scroll', () => {
        //     const header = document.querySelector('header');
        //     // const navLinks = document.getElementById('navLinks');
        //     if (window.scrollY > 50) {
        //         header.style.background = 'rgba(0, 0, 0, 0.95)';
        //         header.style.padding = '15px 5%';
        //         navLinks.style.display = 'flex';
        //     } else {
        //         header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.5))';
        //         header.style.padding = '20px 5%';
        //         navLinks.style.display = 'none';
        //     }
        // });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
        // const movieCards = document.querySelectorAll('.movie-card');
        
        // movieCards.forEach(card => {
        //     card.addEventListener('mouseenter', () => {
        //         const info = card.querySelector('.movie-info');
        //         info.style.transform = 'translateY(0)';
        //     });
            
        //     card.addEventListener('mouseleave', () => {
        //         const info = card.querySelector('.movie-info');
        //         info.style.transform = 'translateY(100%)';
        //     });
        // });

        window.addEventListener("load", function () {
            const container = document.getElementById("comingSoonContainer");
            const blurredBg = container.querySelector(".blurred-bg");
            const firstImage = container.querySelector(".img"); // get the first promo image

            if (firstImage && blurredBg) {
                blurredBg.style.backgroundImage = `url(${firstImage.src})`;
            }
        });
