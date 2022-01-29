// Setup our listener
const xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.open('GET', 'https://5d0e3cd1eba6ef0014561072.mockapi.io/students');
xhr.send();
