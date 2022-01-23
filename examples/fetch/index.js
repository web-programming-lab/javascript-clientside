/* eslint-disable no-undef */

// GET
async function getStudents() {
  const response = await fetch(
    'https://5d0e3cd1eba6ef0014561072.mockapi.io/students'
  );
  return response.json();
}

getStudents().then((students) => console.log('students', students));

const student = {
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
};

// POST
const response = fetch('https://5d0e3cd1eba6ef0014561072.mockapi.io/students', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(student),
});

response.then(console.log);
