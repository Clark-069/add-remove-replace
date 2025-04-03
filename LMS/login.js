/**
 * Handles the login form submission.
 * - Prevents the default form submission.
 * - Retrieves the entered username and password.
 * - Checks if the credentials match the hardcoded values (admin/password).
 * - Displays an error message if login fails.
 * - Redirects to index.html if login is successful.
 */
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");

    if (username === "admin" && password === "password") {
        alert("Login successful! Welcome, " + username);
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        errorMessage.textContent = "Invalid username or password."; // Show error message
    }
});
