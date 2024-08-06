document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    if(query) {
        // Basic search functionality
        alert('Searching for: ' + query);
        // Implement your search logic here, like redirecting to a search results page
    } else {
        alert('Please enter a search term.');
    }
});
