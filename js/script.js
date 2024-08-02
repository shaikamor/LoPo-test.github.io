// Simulating User Login Status for Demo
document.addEventListener('DOMContentLoaded', () => {
    const loggedIn = sessionStorage.getItem('loggedIn');

    if (loggedIn === 'true') {
        document.getElementById('login-link').style.display = 'none';
        document.getElementById('welcome-message').style.display = 'block';
    }

    // Example of dynamic offer update (you can enhance this)
    const date = new Date();
    const day = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
    if (day === 5) { // Friday offer
        document.getElementById('weekly-offer').textContent = "Flash Sale on Groceries!";
    }
});
