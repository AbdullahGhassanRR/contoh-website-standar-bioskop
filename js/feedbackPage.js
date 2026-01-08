
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

        // Star Rating System
        const stars = document.querySelectorAll('.rating-star');
        const ratingInput = document.getElementById('rating');
        
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = this.dataset.rating;
                ratingInput.value = rating;
                
                stars.forEach((s, index) => {
                    if (index < rating) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            });
            
            star.addEventListener('mouseover', function() {
                const hoverRating = this.dataset.rating;
                
                stars.forEach((s, index) => {
                    if (index < hoverRating) {
                        s.style.color = 'var(--primary-color)';
                        s.style.transform = 'scale(1.1)';
                    }
                });
            });
            
            star.addEventListener('mouseout', function() {
                const currentRating = ratingInput.value;
                
                stars.forEach((s, index) => {
                    if (index >= currentRating) {
                        s.style.color = 'rgba(255, 255, 255, 0.3)';
                        s.style.transform = 'scale(1)';
                    }
                });
            });
        });

        // Form Submission
        const feedbackForm = document.getElementById('feedbackForm');
        const thankYouMessage = document.querySelector('.thank-you-message');
    
    feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const rating = parseInt(document.getElementById('rating').value);
    const feedback = document.getElementById('feedback').value.trim();

    
    function isAllDigits(str) {
        for (let i = 0; i < str.length; i++) {
            const code = str.charCodeAt(i);
            if (code < 48 || code > 57) {
                return false;
            }
        }
        return true;
    }

    if (name === "") {
        alert("Name cannot be empty.");
        return;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (phone === "" || !isAllDigits(phone) || phone.length < 8) {
        alert("Please enter a valid phone number (only digits, at least 8 characters).");
        return;
    }

    if (isNaN(rating) || rating < 1 || rating > 5) {
        alert("Please select a rating between 1 and 5 stars.");
        return;
    }

    if (feedback === "") {
        alert("Feedback cannot be empty.");
        return;
    }

   
    console.log({ name, email, phone, rating, feedback });

    feedbackForm.style.display = 'none';
    thankYouMessage.style.display = 'block';
    feedbackForm.reset();
    ratingInput.value = '0';
    stars.forEach(star => star.classList.remove('active'));
    thankYouMessage.scrollIntoView({ behavior: 'smooth' });
});
