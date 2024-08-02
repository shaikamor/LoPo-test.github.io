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

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const otp = document.getElementById('otp').value;

    // Simulate OTP verification
    if (otp === '123456') {
        alert('Login successful');
        // Redirect to homepage or hide login form
        window.location.href = 'index.html';
    } else {
        alert('Invalid OTP');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const sendOtpButton = document.getElementById('sendOtpButton');
    const otpGroup = document.querySelector('.otp-group');
    const loginButton = document.getElementById('loginButton');

    otpGroup.style.display = 'none';
    loginButton.style.display = 'none';

    sendOtpButton.addEventListener('click', () => {
        // Simulate OTP sending and showing OTP input
        otpGroup.style.display = 'block';
        sendOtpButton.style.display = 'none';
        loginButton.style.display = 'block';
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Simulate successful login
        localStorage.setItem('isLoggedIn', 'true');

        // Redirect to home page or hide login form
        window.location.href = 'index.html'; // Redirect to home page
    });

    // Redirect logged-in users back to the homepage
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
        window.location.href = 'index.html';
    }
});
