document.addEventListener("DOMContentLoaded", function () {
    const loginSection = document.getElementById('login-register-section');
    const accountDetailsSection = document.getElementById('user-account-details');
    const ordersSection = document.getElementById('orders-section');
    const securitySection = document.getElementById('security-section');
    const helpSupportSection = document.getElementById('help-support-section');
    
    // Simulating user login state
    const isLoggedIn = false; // Change this to true if the user is logged in

    if (isLoggedIn) {
        loginSection.style.display = 'none';
        accountDetailsSection.style.display = 'block';
        ordersSection.style.display = 'block';
        securitySection.style.display = 'block';
        helpSupportSection.style.display = 'block';
    } else {
        loginSection.style.display = 'block';
        accountDetailsSection.style.display = 'none';
        ordersSection.style.display = 'none';
        securitySection.style.display = 'none';
        helpSupportSection.style.display = 'none';
    }

    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        // Here you would handle the actual login logic, including OTP verification
        // For now, just simulate a successful login
        loginSection.style.display = 'none';
        accountDetailsSection.style.display = 'block';
        ordersSection.style.display = 'block';
        securitySection.style.display = 'block';
        helpSupportSection.style.display = 'block';
    });

    // Handle logout
    document.getElementById('logoutButton').addEventListener('click', function () {
        loginSection.style.display = 'block';
        accountDetailsSection.style.display = 'none';
        ordersSection.style.display = 'none';
        securitySection.style.display = 'none';
        helpSupportSection.style.display = 'none';
    });
});
