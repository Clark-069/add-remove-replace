/**
 * Handles the forgot password form submission.
 * - Prevents the default form submission.
 * - Simulates sending a password reset email.
 */
document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    if (email.trim() === "") {
        message.textContent = "Please enter a valid email address.";
        return;
    }

    alert("A password reset link has been sent to " + email);
    window.location.href = "login.html"; // Redirect to login page
});