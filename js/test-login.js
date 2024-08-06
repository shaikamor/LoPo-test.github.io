document.addEventListener('DOMContentLoaded', () => {
  const sendOtpButton = document.getElementById('sendOtpButton');
  const loginButton = document.getElementById('loginButton');
  const otpGroup = document.getElementById('otpGroup');
  const userNameMenuItem = document.getElementById('userNameMenuItem');
  const signInMenuItem = document.getElementById('signInMenuItem');
  const logoutMenuItem = document.getElementById('logoutMenuItem');

  // Simulate a user login with a dummy user
  let user = JSON.parse(localStorage.getItem('user')) || {
    isLoggedIn: false,
    name: ''
  };

  // Function to update the UI based on login status
  function updateUI() {
    if (user.isLoggedIn) {
      signInMenuItem.style.display = 'none';
      userNameMenuItem.style.display = 'inline-block';
      userNameMenuItem.textContent = `Welcome, ${user.name}`;
      logoutMenuItem.style.display = 'inline-block';
    } else {
      signInMenuItem.style.display = 'inline-block';
      userNameMenuItem.style.display = 'none';
      logoutMenuItem.style.display = 'none';
    }
  }

  // Call the function to update the UI initially
  updateUI();

  // Handle Send OTP button click
  sendOtpButton?.addEventListener('click', () => {
    // Hide registration fields and show OTP input and Login button
    otpGroup.style.display = 'block';
    sendOtpButton.style.display = 'none';
    loginButton.style.display = 'block';
  });

  // Handle login form submission
  const loginForm = document.getElementById('loginForm');
  loginForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    // Simulate OTP validation (with dummy OTP "1234")
    const otp = document.getElementById('otp').value;
    if (otp === "1234") {
      // Set the user as logged in
      user.isLoggedIn = true;
      user.name = document.getElementById('fullName').value;
      localStorage.setItem('user', JSON.stringify(user));

      // Update UI and redirect to the homepage
      updateUI();
      window.location.href = 'index.html';
    } else {
      alert("Invalid OTP. Please try again.");
    }
  });

  // Handle logout
  logoutMenuItem?.addEventListener('click', () => {
    user.isLoggedIn = false;
    localStorage.removeItem('user');
    updateUI();
  });
});
