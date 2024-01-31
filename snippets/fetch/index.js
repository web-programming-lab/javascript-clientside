const url = 'https://5d0e3cd1eba6ef0014561072.mockapi.io/students';

// GET
async function getStudents() {
  const response = await fetch(url);
  return response.json();
}

// POST
async function postStudents() {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });

  return response.json();
}

const student = {
  firstname: 'Hans',
  lastname: 'Meier',
};

const students = await getStudents();
console.log('students', students);
const result = await postStudents();
console.log('result', result);
