// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevents default link behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scroll to the target element
        });
    });
});

// Hamburger menu toggle functionality
const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active'); // Toggle the 'active' class to show/hide the nav menu
    window.scrollTo(0, 0); // Optional: Reset scroll position when the menu is toggled
});
