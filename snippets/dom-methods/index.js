/* eslint-disable quotes */
console.log("querySelector('ul > li:last-child')", 'ul > li:last-child', document.querySelector('ul > li:last-child'));
console.log("querySelectorAll('ul > li')", document.querySelectorAll('ul > li'));
console.log("getElementById('myList')", document.getElementById('myList'));
console.log("getElementsByName('myListName')", document.getElementsByName('myListName'));
console.log("getElementsByTagName('li')", document.getElementsByTagName('li')); // Returns a HTMLCollection (because it contains only element nodes (tags))
console.log("getElementsByClass('myClass')", document.getElementsByClassName('myClass')); // Returns a HTMLCollection (because it contains only element nodes (tags))