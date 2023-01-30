/* eslint-disable quotes */
console.log(
  "querySelector('ul > li:last-child')",
  document.querySelector('ul > li:last-child') // HTMLLIElement
);
console.log(
  "querySelectorAll('ul > li')",
  document.querySelectorAll('ul > li') // NodeList
);
console.log(
  "getElementById('myList')",
  document.getElementById('myList') // HTMLUListElement
);
console.log(
  "getElementsByName('myListName')",
  document.getElementsByName('myListName') // NodeList
);
console.log("getElementsByTagName('li')", document.getElementsByTagName('li')); // Returns a HTMLCollection (because it can contain only element nodes (tags))
console.log(
  "getElementsByClass('myClass')",
  document.getElementsByClassName('myClass')
); // Returns a HTMLCollection (because it can contain only element nodes (tags))

/**
 * An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.
 * A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.
 */
