document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loginMenuItem = document.getElementById('loginMenuItem');
    const logoutMenuItem = document.getElementById('logoutMenuItem');
    const logoutButton = document.getElementById('logoutButton');
    const welcomeMessage = document.getElementById('welcomeMessage');

    if (isLoggedIn === 'true') {  // Updated: Checking if the value is 'true'
        loginMenuItem.style.display = 'none';
        logoutMenuItem.style.display = 'block';
        const userFullName = localStorage.getItem('userFullName');
        if (userFullName) {
            welcomeMessage.innerHTML = `Welcome back, ${userFullName}!`;
        }
    }

    // Handling logout
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userFullName');
            window.location.href = 'index.html'; // Redirect to home page after logout
        });
    }
});
