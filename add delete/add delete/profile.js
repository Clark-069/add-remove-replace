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
}

// Function to load borrowed books from localStorage
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

// Load borrowed books on page load
document.addEventListener("DOMContentLoaded", loadAddedBooks);
