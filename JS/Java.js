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
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});



// Form Submissions
const contactForm = document.getElementById('contact-form');
const joinForm = document.getElementById('join-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

joinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for joining! We will contact you with further details.');
    joinForm.reset();
    modal.style.display = 'none';
});


// Navbar Background Change on Scroll

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});


// Animate Services on Scroll


