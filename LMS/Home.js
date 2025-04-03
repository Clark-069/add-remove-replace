function addBook() {
    const bookName = prompt("Enter book name:");
    if (bookName) {
        const bookList = document.getElementById("book-list");
        const li = document.createElement("li");
        li.className = "list-group-item book-item d-flex justify-content-between";
        li.innerHTML = `<span>${bookName}</span>
                        <div>
                            <button class='btn btn-danger btn-sm' onclick='deleteBook(this)'>Delete</button>
                            <button class='btn btn-warning btn-sm' onclick='replaceBook(this)'>Replace</button>
                        </div>`;
        bookList.appendChild(li);

        li.style.transform = 'scale(0)';
        setTimeout(() => {
            li.style.transform = 'scale(1)';
        }, 10);

        saveBookToProfile(bookName);
    }
}

function deleteBook(button) {
    const bookItem = button.parentElement.parentElement;
    const bookName = bookItem.firstElementChild.textContent;
    
    bookItem.style.opacity = '0';
    setTimeout(() => {
        bookItem.remove();
        removeBookFromProfile(bookName);
    }, 300);
}

function replaceBook(button) {
    const oldName = button.parentElement.previousElementSibling.textContent;
    const newName = prompt("Enter new book name:");
    if (newName) {
        button.parentElement.previousElementSibling.textContent = newName;
        updateBookInProfile(oldName, newName);
    }
}

// Save book to Local Storage
function saveBookToProfile(bookName) {
    let books = JSON.parse(localStorage.getItem("profileBooks")) || [];
    books.push(bookName);
    localStorage.setItem("profileBooks", JSON.stringify(books));
}

// Remove book from Local Storage
function removeBookFromProfile(bookName) {
    let books = JSON.parse(localStorage.getItem("profileBooks")) || [];
    books = books.filter(book => book !== bookName);
    localStorage.setItem("profileBooks", JSON.stringify(books));
}

// Update book name in Local Storage
function updateBookInProfile(oldName, newName) {
    let books = JSON.parse(localStorage.getItem("profileBooks")) || [];
    const index = books.indexOf(oldName);
    if (index !== -1) {
        books[index] = newName;
        localStorage.setItem("profileBooks", JSON.stringify(books));
    }
}
