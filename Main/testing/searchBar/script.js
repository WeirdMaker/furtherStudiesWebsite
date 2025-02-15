document.getElementById('search-container').addEventListener('click', function () {
  const searchTerm = document.getElementById('search-bar').value.trim().toLowerCase();
  const resultsContainer = document.getElementById('search-results');

  if (searchTerm === '') {
    resultsContainer.innerHTML = `<p>Please enter a search term.</p>`;
    return;
  }

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const results = data.filter(page => page.content.toLowerCase().includes(searchTerm));

      if (results.length > 0) {
        resultsContainer.innerHTML = results.map(page => `<p><a href="${page.url}">${page.title}</a></p>`).join('');
      } else {
        resultsContainer.innerHTML = `<p>No results found for: <strong>${searchTerm}</strong></p>`;
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      resultsContainer.innerHTML = `<p>An error occurred while searching.</p>`;
    });
});