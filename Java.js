const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  
});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Modal Functionality
const modal = document.getElementById('joinModal');
const joinBtn = document.querySelector('.join-btn');
const closeBtn = document.querySelector('.close');

joinBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});


// Form Submissions

// Navbar Background Change on Scroll

// Animate Services on Scroll


