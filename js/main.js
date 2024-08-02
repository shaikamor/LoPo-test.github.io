// js/main.js

document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to My Food & Grocery App!");
});
// js/main.js

document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to My Food & Grocery App!");
    
    // Example: Form submission handling
    document.querySelector('.review form')?.addEventListener('submit', function(event) {
        event.preventDefault();
        alert("Review submitted!");
    });

    document.querySelector('.search form')?.addEventListener('submit', function(event) {
        event.preventDefault();
        alert("Search functionality is not yet implemented.");
    });
});
