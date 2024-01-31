/* eslint-disable no-empty */
let asyncStart = Date.now();
while (Date.now() < asyncStart + 5000) {}
console.log('hello from async');

try {
  console.log('async script: %s', document.getElementById('test').innerHTML);
} catch (e) {
  console.log('async script - test element not available yet.');
}
