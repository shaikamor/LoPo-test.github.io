document.getElementById('registerForm').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var passwordRules = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

    if (!password.match(passwordRules)) {
        event.preventDefault();
        alert('Password does not meet the required criteria.');
    } else {
        event.preventDefault();
        alert('Registration successful! Redirecting to login page...');
        // Simulate storing the password in DB (For real implementation, this will be done in the backend)
        localStorage.setItem('registeredPassword', password);
        window.location.href = 'login.html';
    }
});
