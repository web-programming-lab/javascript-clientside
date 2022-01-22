document.getElementById('child').addEventListener('click', clickHandler);
document.getElementById('parent').addEventListener('click', clickHandler, false);

function clickHandler(event) {
  console.log(event.type, event);
  console.log(this);
}