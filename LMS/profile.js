document.addEventListener("DOMContentLoaded", function () {
    loadUserDetails();
    loadAddedBooks();
});

function editDetails() {
    let name = prompt("Enter new name:", document.getElementById("name").innerText);
    let email = prompt("Enter new email:", document.getElementById("email").innerText);
    let id = prompt("Enter new ID number:", document.getElementById("ID").innerText);
    let user = prompt("Enter new user category:", document.getElementById("User").innerText);
    let mobile = prompt("Enter new mobile number:", document.getElementById("mobile").innerText);

    if (name) document.getElementById("name").innerText = name;
    if (email) document.getElementById("email").innerText = email;
    if (id) document.getElementById("ID").innerText = id;
    if (user) document.getElementById("User").innerText = user;
    if (mobile) document.getElementById("mobile").innerText = mobile;

    saveUserDetails({ name, email, id, user, mobile });
}

// Save user details to localStorage
function saveUserDetails(details) {
    localStorage.setItem("userDetails", JSON.stringify(details));
}

// Load user details from localStorage
function loadUserDetails() {
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));

    if (userDetails) {
        if (userDetails.name) document.getElementById("name").innerText = userDetails.name;
        if (userDetails.email) document.getElementById("email").innerText = userDetails.email;
        if (userDetails.id) document.getElementById("ID").innerText = userDetails.id;
        if (userDetails.user) document.getElementById("User").innerText = userDetails.user;
        if (userDetails.mobile) document.getElementById("mobile").innerText = userDetails.mobile;
    }
}

// Function to load added books from localStorage
function loadAddedBooks() {
    let AddedBooks = JSON.parse(localStorage.getItem("AddedBooks")) || [];
    let AddedBooksList = document.getElementById("AddedBooksList");
    AddedBooksList.innerHTML = ""; // Clear list before reloading

    AddedBooks.forEach(book => {
        let li = document.createElement("li");
        li.innerText = book;
        AddedBooksList.appendChild(li);
    });
}
