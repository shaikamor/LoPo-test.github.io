document.addEventListener('DOMContentLoaded', () => {
  const sendOtpButton = document.getElementById('sendOtpButton');
  const loginButton = document.getElementById('loginButton');
  const otpGroup = document.getElementById('otpGroup');

  // Handle Send OTP button click
  sendOtpButton.addEventListener('click', () => {
    console.log("OTP sent to user's phone");

    // Hide registration fields and send OTP button, show OTP input and Login button
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
        window.location.href = 'index.html'; // Redirect to home page after login
      } else {
        alert("Invalid OTP. Please try again.");
      }
    });
  }
});
// Mock user data
const user = {
  isLoggedIn: false,
  name: 'John Doe'
};

function updateUIBasedOnUser() {
  if (user.isLoggedIn) {
    signInMenuItem.style.display = 'none';
    userNameMenuItem.style.display = 'block';
    userNameMenuItem.innerHTML = `Welcome, ${user.name}`;
    userNameMenuItem.addEventListener('click', () => {
      accountSection.style.display = 'block';
      mainContent.style.display = 'none';
    });
  } else {
    signInMenuItem.style.display = 'block';
    userNameMenuItem.style.display = 'none';
    accountSection.style.display = 'none';
    mainContent.style.display = 'block';
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const signInMenuItem = document.getElementById('signInMenuItem');
  const userNameMenuItem = document.getElementById('userNameMenuItem');
  const logoutButton = document.getElementById('logoutButton');

  updateUIBasedOnUser();

  logoutButton.addEventListener('click', function() {
    user.isLoggedIn = false;
    updateUIBasedOnUser();
  });
});
