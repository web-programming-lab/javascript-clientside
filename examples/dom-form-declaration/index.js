const myFormElement = document.forms.myForm;
const numberOfStudentsElement = myFormElement.elements.numberOfStudents;

console.log(myFormElement);
console.log(numberOfStudentsElement);

myFormElement.addEventListener('submit', (event) => {
  event.preventDefault(); // Get & print form values
  const data = new FormData(myFormElement);
  for (const [name, value] of data) {
    console.log(name, value);
  }
});
