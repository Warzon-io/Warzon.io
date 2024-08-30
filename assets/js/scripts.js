// scripts.js

// Toggle Navbar on Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// Scroll to Section Smoothly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Placeholder for future JS features, such as:
// - Loading animations
// - Dynamic game filtering or search
// - Modal popups for game details or login

// Example: Modal Popup Logic (to be implemented later)
// const modal = document.querySelector('.modal');
// const openModalBtn = document.querySelector('.open-modal-btn');
// const closeModalBtn = document.querySelector('.close-modal-btn');

// openModalBtn.addEventListener('click', function() {
//     modal.style.display = 'block';
// });

// closeModalBtn.addEventListener('click', function() {
//     modal.style.display = 'none';
// });

// window.addEventListener('click', function(e) {
//     if (e.target === modal) {
//         modal.style.display = 'none';
//     }
// });

