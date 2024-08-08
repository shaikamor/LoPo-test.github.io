// Elements
const emailPasswordForm = document.getElementById('emailPasswordForm');
const otpForm = document.getElementById('otpForm');
const loginWithOtpLink = document.getElementById('loginWithOtpLink');
const sendOtpButton = document.getElementById('sendOtpButton');
const otpGroup = document.getElementById('otpGroup');
const submitOtpButton = document.getElementById('submitOtpButton');

// Event listener to switch to OTP login form
loginWithOtpLink.addEventListener('click', function(event) {
    event.preventDefault();
    emailPasswordForm.style.display = 'none';
    otpForm.style.display = 'block';
});

// Event listener to handle OTP sending
sendOtpButton.addEventListener('click', function() {
    const phoneNumber = document.getElementById('phoneNumber').value;

    if (phoneNumber.match(/^\d{10}$/)) {
        otpGroup.style.display = 'block';
        sendOtpButton.style.display = 'none';
        submitOtpButton.style.display = 'inline-block';
        alert('OTP has been sent to your phone number.');
        // Simulate OTP sending logic here
    } else {
        alert('Please enter a valid phone number.');
    }
});

// Event listener to handle OTP form submission
otpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const otp = document.getElementById('otp').value;

    if (otp === "1234") { // Simulating OTP check
        alert('OTP verified. Redirecting to the home page...');
        window.location.href = 'index.html'; // Redirect to home page
    } else {
        alert('Invalid OTP. Please try again.');
    }
});
