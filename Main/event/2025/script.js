// Get the hamburger button and navigation links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const searchBar = document.querySelector('.search-bar');

//search bar
searchBar.addEventListener('keydown',function(event){
    if(event.key=='Enter'){
        const searchTerm = document.querySelector('.query').value.trim().toLowerCase();
        const resultsContainer = document.querySelector('.search-results');
    
        if (searchTerm === '') {
            resultsContainer.innerHTML = `<p>Please enter a search term.</p>`;
            return;
          }
        
        fetch('../../data.json')
        .then(response => response.json())
        .then(data => {
            const results = data.filter(page => page.content.toLowerCase().includes(searchTerm));
    
            if (results.length > 0) {
            resultsContainer.innerHTML = results.map(page => `<p><a href="../../${page.url}">${page.title}</a></p>`).join(''); //IMPORTANT: this is where we show our html code to display redirecting link
            } else {
            resultsContainer.innerHTML = `<p>No results found for: <strong>${searchTerm}</strong></p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            resultsContainer.innerHTML = `<p>An error occurred while searching.</p>`;
        });
    }
});

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