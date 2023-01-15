/* eslint-disable no-empty */
let normal = Date.now();
while (Date.now() < normal + 1000) {}
console.log('hello from normal script');

try {
  console.log('normal script: %s', document.getElementById('test').innerHTML);
} catch (e) {
  console.log('normal script - test element not available yet.');
}
