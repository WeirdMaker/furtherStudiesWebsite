// Get the hamburger button and navigation links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const searchBar = document.querySelector('.search-bar');

// Toggle the mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    searchBar.classList.toggle('active');
});