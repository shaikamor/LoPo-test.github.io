document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loginMenuItem = document.getElementById('loginMenuItem');
    const logoutMenuItem = document.getElementById('logoutMenuItem');
    const logoutButton = document.getElementById('logoutButton');

    if (isLoggedIn) {
        loginMenuItem.style.display = 'none';
        logoutMenuItem.style.display = 'block';
    }

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'index.html'; // Redirect to home page after logout
    });
});
