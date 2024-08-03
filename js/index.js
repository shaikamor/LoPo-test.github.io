document.addEventListener('DOMContentLoaded', () => {
    const sendOtpButton = document.getElementById('sendOtpButton');
    const loginButton = document.getElementById('loginButton');
    const otpGroup = document.getElementById('otpGroup');

    const fullNameGroup = document.getElementById('fullNameGroup');
    const emailGroup = document.getElementById('emailGroup');
    const phoneNumberGroup = document.getElementById('phoneNumberGroup');
    const formTitle = document.getElementById('formTitle');
    const logoutButton = document.getElementById('logoutButton');
    const cartButton = document.getElementById('cartButton');

    // Handle Send OTP button click
    sendOtpButton.addEventListener('click', () => {
        // Simulate OTP sending logic
        console.log("OTP sent to user's phone");

        // Hide the registration fields and send OTP button, show the OTP input and Login button
        formTitle.textContent = "Enter OTP";
        fullNameGroup.style.display = 'none';
        emailGroup.style.display = 'none';
        phoneNumberGroup.style.display = 'none';
        sendOtpButton.style.display = 'none';
        otpGroup.style.display = 'block';
        loginButton.style.display = 'block';
    });

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the form from submitting

            // Simulate OTP verification (using a dummy OTP "1234")
            const otp = document.getElementById('otp').value;

            if (otp === "1234") { // Replace with actual OTP validation logic
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'account-details.html'; // Redirect to home page after login
            } else {
                alert("Invalid OTP. Please try again.");
            }
        });
    }

    // Handle logout
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'login.html'; // Redirect to login page
        });
    }

    // Check if the user is logged in
    if (localStorage.getItem('isLoggedIn')) {
        if (logoutButton) logoutButton.style.display = 'inline-block'; // Show the logout button
    } else {
        // If not logged in, redirect to the login page
        if (window.location.pathname !== '/login.html') {
            window.location.href = 'login.html';
        }
    }
});
