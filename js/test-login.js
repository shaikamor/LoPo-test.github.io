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
    console.log("OTP sent to user's phone");

    // Simulate OTP sending and show OTP input
    // In a real application, you would call an API to send the OTP
    alert("Simulated OTP sent sucessfully");

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
        alert("Login successful!");
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html'; // Redirect to home page after login
      } else {
        alert("Invalid OTP. Please try again.");
      }
    });
  }
});

// Handle user login state
const user = {
  isLoggedIn: false,
  name: 'John Doe'
};

function updateUIBasedOnUser() {
  const signInMenuItem = document.getElementById('signInMenuItem');
  const userNameMenuItem = document.getElementById('userNameMenuItem');
  const logoutButton = document.getElementById('logoutButton');
  const accountSection = document.getElementById('accountSection');
  const mainContent = document.getElementById('mainContent');

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
  const logoutButton = document.getElementById('logoutButton');

  updateUIBasedOnUser();

  logoutButton.addEventListener('click', function() {
    user.isLoggedIn = false;
    updateUIBasedOnUser();
  });
});
