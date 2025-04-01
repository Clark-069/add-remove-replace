// Data for subjects
let subjects = [
    { id: 1, name: "Mathematics" },
    { id: 2, name: "Physics" },
    { id: 3, name: "Chemistry" },
    { id: 4, name: "Computer Science" },
  ];
  
  let ownedSubjects = [];
  
  // Load subjects into the table
  function loadSubjects() {
    const table = document.getElementById("Subject-table");
    table.innerHTML = "";
  
    subjects.forEach((subject) => {
      let row = `<tr>
              <td>${subject.id}</td>
              <td>${subject.name}</td>
              <td><button onclick="ownSubject(${subject.id})">Own</button></td>
          </tr>`;
      table.innerHTML += row;
    });
  }
  
  // Function to search subjects
  function searchSubjects() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#Subject-table tr");
  
    rows.forEach((row) => {
      let subjectName = row.cells[1].textContent.toLowerCase();
      row.style.display = subjectName.includes(input) ? "" : "none";
    });
  }
  
  // Function to add a new subject (only adds to available subjects)
  function addSubject() {
    let subjectName = document.getElementById("book-name").value;
    if (subjectName.trim() === "") {
      alert("Subject name cannot be empty!");
      return;
    }
  
    let newSubject = {
      id: subjects.length ? subjects[subjects.length - 1].id + 1 : 1,
      name: subjectName,
    };
  
    // Add the new subject to the subjects array (no change to ownedSubjects)
    subjects.push(newSubject);
  
    // Update the subject list table (subjects list only)
    loadSubjects();
  
    // Clear the input field after adding
    document.getElementById("book-name").value = "";
  }
  
  // Function to delete a subject
  function deleteSubject() {
    let subjectId = parseInt(document.getElementById("delete-id").value);
  
    subjects = subjects.filter((subject) => subject.id !== subjectId);
    ownedSubjects = ownedSubjects.filter((subject) => subject.id !== subjectId);
  
    loadSubjects();
    loadOwnedSubjects();
    document.getElementById("delete-id").value = ""; // Clear input
  }
  
  // Function to replace a subject
  function replaceSubject() {
    let subjectId = parseInt(document.getElementById("replace-id").value);
    let newSubjectName = document.getElementById("new-Subject-name").value;
  
    let subjectIndex = subjects.findIndex((subject) => subject.id === subjectId);
    if (subjectIndex === -1) {
      alert("Subject ID not found!");
      return;
    }
  
    subjects[subjectIndex].name = newSubjectName;
    loadSubjects();
    document.getElementById("replace-id").value = ""; // Clear input
    document.getElementById("new-Subject-name").value = ""; // Clear input
  }
  
  // Function to add a subject to "Owned Subjects"
  function ownSubject(subjectId) {
    let subject = subjects.find((sub) => sub.id === subjectId);
  
    if (subject && !ownedSubjects.some((sub) => sub.id === subjectId)) {
      ownedSubjects.push(subject);
      loadOwnedSubjects();
    }
  }
  
  // Function to remove a subject from "Owned Subjects"
  function removeOwnedSubject(subjectId) {
    ownedSubjects = ownedSubjects.filter((sub) => sub.id !== subjectId);
    loadOwnedSubjects();
  }
  
  // Load owned subjects
  function loadOwnedSubjects() {
    const ownedList = document.getElementById("owned-list");
    ownedList.innerHTML = "";
  
    ownedSubjects.forEach((subject) => {
      let listItem = `<li>
              ${subject.name}
              <button onclick="removeOwnedSubject(${subject.id})">Remove</button>
          </li>`;
      ownedList.innerHTML += listItem;
    });
  }
  
  // Load subjects and owned subjects on page load
  document.addEventListener("DOMContentLoaded", () => {
    loadSubjects();
    loadOwnedSubjects();
  });  