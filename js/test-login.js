document.addEventListener('DOMContentLoaded', () => {
  const sendOtpButton = document.getElementById('sendOtpButton');
  const loginButton = document.getElementById('loginButton');
  const otpGroup = document.getElementById('otpGroup');
  const loginForm = document.getElementById('loginForm');
  const signInMenuItem = document.getElementById('signInMenuItem');
  const userNameMenuItem = document.getElementById('userNameMenuItem');
  const logoutButton = document.getElementById('logoutButton');

  // Mock user data
  const user = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    name: localStorage.getItem('userName') || 'John Doe'
  };

  function updateUIBasedOnUser() {
    if (user.isLoggedIn) {
      signInMenuItem.style.display = 'none';
      userNameMenuItem.style.display = 'block';
      userNameMenuItem.innerHTML = `Welcome, ${user.name}`;
    } else {
      signInMenuItem.style.display = 'block';
      userNameMenuItem.style.display = 'none';
    }
  }

  // Initial UI setup
  updateUIBasedOnUser();

  // Handle Send OTP button click
  sendOtpButton.addEventListener('click', () => {
    console.log("OTP sent to user's phone");

    // Hide registration fields and send OTP button, show OTP input and Login button
    document.getElementById('formTitle').textContent = "Enter OTP";
    document.getElementById('fullNameGroup').style.display = 'none';
    document.getElementById('emailGroup').style.display = 'none';
    document.getElementById('phoneNumberGroup').style.display = 'none';
    sendOtpButton.style.display = 'none';
    otpGroup.style.display = 'block';
    loginButton.style.display = 'block';
  });

  // Handle login form submission
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the form from submitting

      // Simulate OTP verification (using a dummy OTP "1234")
      const otp = document.getElementById('otp').value;

      if (otp === "1234") { // Replace with actual OTP validation logic
        user.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');
        const userName = document.getElementById('fullName').value || user.name;
        localStorage.setItem('userName', userName);
        user.name = userName;
        updateUIBasedOnUser();
        window.location.href = 'index.html'; // Redirect to home page after login
      } else {
        alert("Invalid OTP. Please try again.");
      }
    });
  }

  // Handle logout
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userName');
      user.isLoggedIn = false;
      user.name = '';
      updateUIBasedOnUser();
      window.location.href = 'index.html'; // Redirect to home page after logout
    });
  }
});
