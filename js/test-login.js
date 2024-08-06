document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const phoneNumber = document.getElementById('phoneNumber').value;
        const otp = document.getElementById('otp').value;

        // Replace this with a fetch request to your backend API
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phoneNumber, otp })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Successful login, redirect to home page or handle user session
                window.location.href = 'index.html'; // Replace with your home page URL
            } else {
                // Handle login error
                console.error('Login failed:', data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
