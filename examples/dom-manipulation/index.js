// Add a new element
const element = document.createElement('h1'); // HTMLHeadingElement
element.textContent = 'DOM manipulation 💡💡💡';
document.body.append(element);

// Remove a specific element
const firstHeaderElement = document.querySelector('h1');
console.dir(firstHeaderElement);
document.body.removeChild(firstHeaderElement);

const secondElement = document.createElement('h1');
secondElement.textContent = 'Second manipulation';
document.body.prepend(secondElement);

const thirdElement = document.createElement('h1');
thirdElement.textContent = 'Third manipulation';
secondElement.before(thirdElement);

document.body.insertAdjacentHTML('beforeend', '<p>hello from paragraph</p>');
document.write('<h2>after loading...</h2>');
