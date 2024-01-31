/* eslint-disable no-empty */
let normal2 = Date.now();
while (Date.now() < normal2 + 1000) {}
console.log('hello from normal script II');

try {
  console.log('normal script2: %s', document.getElementById('test').innerHTML);
} catch (e) {
  console.log('normal script2 - test element not available yet..');
}
