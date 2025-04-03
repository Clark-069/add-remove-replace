/**
         * Handles the register form submission.
         * - Prevents the default form submission.
         * - Checks if passwords match.
         * - Displays an error message if passwords do not match.
         * - Simulates a successful registration if validation passes.
         */
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMessage = document.getElementById("errorMessage");

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return;
    }

    alert("Registration successful! Welcome, " + username);
    window.location.href = "login.html"; // Redirect to login page
});