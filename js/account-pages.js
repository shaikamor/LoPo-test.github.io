document.addEventListener("DOMContentLoaded", function () {
    // Simulating user login state
    const isLoggedIn = true; // Set to true for this example; toggle based on actual login state

    if (isLoggedIn) {
        document.getElementById('account-section').style.display = 'block';
    } else {
        window.location.href = "login.html"; // Redirect to login if not logged in
    }

    // Handle logout
    document.getElementById('logoutButton').addEventListener('click', function () {
        // Log out logic here (e.g., clear session, cookies, etc.)
        window.location.href = "index.html"; // Redirect to home after logout
    });
});
