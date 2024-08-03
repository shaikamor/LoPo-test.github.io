document.addEventListener('DOMContentLoaded', () => {
    const sendOtpButton = document.getElementById('sendOtpButton');
    const loginButton = document.getElementById('loginButton');
    const otpGroup = document.getElementById('otpGroup');

    const fullNameGroup = document.getElementById('fullNameGroup');
    const emailGroup = document.getElementById('emailGroup');
    const phoneNumberGroup = document.getElementById('phoneNumberGroup');
    const formTitle = document.getElementById('formTitle');

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
    // Handle logout
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userFullName');
            window.location.href = 'index.html'; // Redirect to home page after logout
        });
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
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting

        // Simulate OTP verification (using a dummy OTP "1234")
        const otp = document.getElementById('otp').value;

        if (otp === "1234") { // Replace with actual OTP validation logic
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'index.html'; // Redirect to home page after login
        } else {
            alert("Invalid OTP. Please try again.");
        }
    });
});
