/* eslint-disable no-empty */
let startDefer = Date.now();
while (Date.now() < startDefer + 1000) {}
console.log('hello from defer');

try {
  console.log('defer script: %s', document.getElementById('test').innerHTML);
} catch (e) {
  console.log('defer script - test element not available yet.');
}
