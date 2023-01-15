class TechradarListTechnologies extends HTMLElement {
  constructor() {
    super();

    this.shadowDom = this.attachShadow({ mode: 'open' });
    this.shadowDom.innerHTML = `

      `;

    this.renderTechnologies();
  }

  // Web Component connected
  connectedCallback() {}
}
window.customElements.define(
  'techradar-list-technologies',
  TechradarListTechnologies
);
