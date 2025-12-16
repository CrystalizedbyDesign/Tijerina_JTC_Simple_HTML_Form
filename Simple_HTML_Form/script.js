const form = document.getElementById("contactForm");
const tableBody = document.getElementById("tableBody");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create a new row
    const row = document.createElement("tr");

    // Create cells
    const nameCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const messageCell = document.createElement("td");

    // Add text to cells
    nameCell.textContent = name;
    emailCell.textContent = email;
    messageCell.textContent = message;

    // Append cells to row
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(messageCell);

    // Append row to table body
    tableBody.appendChild(row);

    // Clear the form
});
