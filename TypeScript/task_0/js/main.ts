interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string
}

let student1: Student = { firstName: "John", lastName: "Doe", age: 20, location: "New York" };
let student2: Student = { firstName: "Jane", lastName: "Smith", age: 22, location: "Los Angeles" };

let studentsList: Student[] = [student1, student2];

// Create a table
const table = document.createElement('table');

// Add table header
const headerRow = document.createElement('tr');
const firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Add each student as a row
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);