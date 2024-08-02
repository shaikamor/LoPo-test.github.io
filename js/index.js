document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loginMenuItem = document.getElementById('loginMenuItem');
    const logoutMenuItem = document.getElementById('logoutMenuItem');
    const logoutButton = document.getElementById('logoutButton');
    const welcomeMessage = document.getElementById('welcomeMessage');

    // Check login status and update UI
    if (isLoggedIn === 'true') {
        if (loginMenuItem) loginMenuItem.style.display = 'none';
        if (logoutMenuItem) logoutMenuItem.style.display = 'block';
        const userFullName = localStorage.getItem('userFullName');
        if (welcomeMessage && userFullName) {
            welcomeMessage.innerHTML = `Welcome back, ${userFullName}!`;
        }
    }

    // Handle logout
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userFullName');
            window.location.href = 'index.html'; // Redirect to home page after logout
        });
    }

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent form submission

            // Simulate OTP validation
            const phoneNumber = document.getElementById('phoneNumber').value;
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const otp = document.getElementById('otp').value;

            if (otp === "123456") { // Dummy OTP check
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userFullName', fullName);

                // Redirect to the home page
                window.location.href = 'index.html';
            } else {
                alert("Invalid OTP. Please try again.");
            }
        });
    }
});
