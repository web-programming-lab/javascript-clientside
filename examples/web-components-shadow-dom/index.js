class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    const shadowDom = this.attachShadow({ mode: 'open' });
    shadowDom.innerHTML = '<style>p {color: blue}</style><p>this is my custom element</p>';
  }
}
window.customElements.define('my-custom-element', MyCustomElement);


// Kein Zugriff auf den Shadow Dom möglich
console.log(document.querySelector('my-custom-element').innerHTML);

// Zugriff via ShadowRoot Property da der Mode 'open' ist
console.log(document.querySelector('my-custom-element').shadowRoot.innerHTML);