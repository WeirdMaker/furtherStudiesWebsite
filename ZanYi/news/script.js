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

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events
function handleScroll() {
    const section = document.querySelector('.hidden-section');
    if (isInViewport(section)) {
        section.classList.add('visible');
    } else {
        section.classList.remove('visible')
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger the check on page load in case the section is already in view
window.addEventListener('load', handleScroll);