class MyCustomElementOne extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: 'open' });
    this.shadowDom.innerHTML = `
      <p>this is my custom element 1</p>
      <button id="exampleButton">Button</button>
      `;
  }

  // Custom element lifecycle callback - called each time the element is added to the document
  connectedCallback() {
    const buttonEl = this.shadowDom.querySelector('#exampleButton');
    buttonEl.addEventListener('click', () => {
      this.dispatchEvent(new Event('customelement-one-click'));
    });
  }
}

class MyCustomElementTwo extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: 'open' });
    this.shadowDom.innerHTML = '<p>this is my custom element 2</p>';
  }

  // Custom element lifecycle callback - called each time the element is added to the document
  connectedCallback() {
    const customElementOneEl = document.querySelector('my-custom-element-one');
    customElementOneEl.addEventListener('customelement-one-click', () => {
      this.shadowDom.innerHTML = `${
        this.shadowDom.innerHTML
      } <p>${new Date()}</p>`;
    });
  }
}

window.customElements.define('my-custom-element-one', MyCustomElementOne);
window.customElements.define('my-custom-element-two', MyCustomElementTwo);
