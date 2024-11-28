//menu_mobile.js

const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');

mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

document.querySelectorAll('.navbar-menu a').forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navbarMenu.classList.remove('active');
    });
});