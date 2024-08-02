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