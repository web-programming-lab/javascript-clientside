class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = '<p>this is my custom element</p>';
  }
}
window.customElements.define('my-custom-element', MyCustomElement);
