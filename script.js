// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
