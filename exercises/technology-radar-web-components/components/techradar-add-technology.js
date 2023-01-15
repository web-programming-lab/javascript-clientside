class TechradarAddTechnology extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: 'open' });
    this.shadowDom.innerHTML = `

      `;
  }

  // Web Component connected
  connectedCallback() {}
}
window.customElements.define(
  'techradar-add-technology',
  TechradarAddTechnology
);
