//Creates a new Date object and pulls the current year in full 
const year = new Date().getFullYear();

//Goes to the document, gets the element with the "year" id, and inserts the value of the variable "year" there
document.getElementById("year").textContent = year;

//Goes to the document, gets the element with the "updated" id, and inserts the template literal shown
//with the date of the last time the file was modified
document.getElementById("updated").textContent = `Last Updated: ${document.lastModified}`;