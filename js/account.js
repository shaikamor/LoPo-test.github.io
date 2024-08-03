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
document.getElementById('sendOtpButton').addEventListener('click', function() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    if (fullName && email && phoneNumber) {
        // Simulate sending OTP
        alert('OTP sent to ' + phoneNumber);

        // Show OTP input field and Login button
        document.querySelector('.otp-group').style.display = 'block';
        document.getElementById('sendOtpButton').style.display = 'none';
        document.getElementById('loginButton').style.display = 'block';
    } else {
        alert('Please fill all fields');
    }
});
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
