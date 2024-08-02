document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loginMenuItem = document.getElementById('loginMenuItem');
    const logoutMenuItem = document.getElementById('logoutMenuItem');
    const logoutButton = document.getElementById('logoutButton');
    const welcomeMessage = document.getElementById('welcomeMessage');

    if (isLoggedIn) {
        loginMenuItem.style.display = 'none';
        logoutMenuItem.style.display = 'block';
        const userFullName = localStorage.getItem('userFullName');
        welcomeMessage.innerHTML = `Welcome back, ${userFullName}!`;
    }

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userFullName');
        window.location.href = 'index.html'; // Redirect to home page after logout
    });
});
