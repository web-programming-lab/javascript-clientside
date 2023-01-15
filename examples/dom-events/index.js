const demoButtonElement = document.getElementById('demo-button');

demoButtonElement.addEventListener('click', (event) =>
  console.log(event.type, event)
);
demoButtonElement.addEventListener('contextmenu', (event) =>
  console.log(event.type, event)
);
demoButtonElement.addEventListener('mouseover', (event) =>
  console.log(event.type, event)
);
demoButtonElement.addEventListener('mouseout', (event) =>
  console.log(event.type, event)
);

const mouseMoveDemoElement = document.getElementById('mouse-move');
const mouseMoveDemoPositionElement = document.getElementById('position');
mouseMoveDemoElement.addEventListener('mousemove', (event) => {
  console.log(event.type, event);
  mouseMoveDemoPositionElement.textContent = `x: ${event.offsetX}, y: ${event.offsetY}`;
});

// eslint-disable-next-line no-unused-vars
function onEvent(event) {
  console.log(event.type, event);
}

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed', event);
});
