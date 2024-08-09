function loadContent(section) {
    const mainContent = document.getElementById('main-content');

    // Clear active class from all links
    document.querySelectorAll('#account-nav ul li a').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the clicked link
    const clickedLink = document.querySelector(`#account-nav ul li a[onclick*="${section}"]`);
    clickedLink.classList.add('active');

    // Use AJAX to fetch data
    fetch(`data/${section}.json`)
        .then(response => response.json())
        .then(data => {
            switch(section) {
                case 'account-details':
                    mainContent.innerHTML = `
                        <h2>Account Details</h2>
                        <p>Name: ${data.name}</p>
                        <p>Email: ${data.email}</p>
                        <p>Phone: ${data.phone}</p>
                    `;
                    break;
                case 'orders':
                    mainContent.innerHTML = `
                        <h2>My Orders</h2>
                        <ul>${data.orders.map(order => `<li>${order}</li>`).join('')}</ul>
                    `;
                    break;
                case 'security':
                    mainContent.innerHTML = `
                        <h2>Security</h2>
                        <p>Password Last Updated: ${data.passwordLastUpdated}</p>
                    `;
                    break;
                case 'help-support':
                    mainContent.innerHTML = `
                        <h2>Help & Support</h2>
                        <p>${data.supportMessage}</p>
                    `;
                    break;
                default:
                    mainContent.innerHTML = `
                        <h2>Welcome to the Account</h2>
                        <p>Please select a section from the left to view its details.</p>
                    `;
                    break;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}
