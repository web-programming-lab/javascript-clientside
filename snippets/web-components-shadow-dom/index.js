class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    const shadowDom = this.attachShadow({ mode: 'open' });
    shadowDom.innerHTML =
      '<style>p {color: blue}</style><p>this is my custom element</p>';
  }

  // Lifecycle Callbacks
  // Wird aufgerufen wenn das Custom Element dem DOM hinzugefügt wird
  connectedCallback() {
    console.log('custom element added to page');
  }

  // Wird aufgerufen wenn das Custom Element dem DOM entfernt wird
  disconnectedCallback() {
    console.log('custom element removed from page');
  }

  // Wird aufgerufen wenn ein Attribut des Custom Elements geändert wird
  attributeChangedCallback(name, oldValue, newValue) {
    console.log('custom element attributes changed', name, oldValue, newValue);
  }
}
window.customElements.define('my-custom-element', MyCustomElement);

// Kein Zugriff auf den Shadow Dom möglich
console.log(document.querySelector('my-custom-element').innerHTML);

// Zugriff via ShadowRoot Property da der Mode 'open' ist
console.log(document.querySelector('my-custom-element').shadowRoot.innerHTML);
