// Get the hamburger button and navigation links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const searchBar = document.querySelector('.search-bar');

// Toggle the mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    searchBar.classList.toggle('active');
});

const infoBoxes = document.querySelectorAll('.info-box');

infoBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const link = box.querySelector('h2 a').href; // Get the link from the title
        window.location.href = link; // Redirect to the link
    });
});