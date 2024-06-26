import { LitElement, html, css } from 'lit'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

class NdHeader extends LitElement {
  static properties = {
    class: { type: String },
    config: { type: Object },
    type: { type: String },
  }

  static styles = css`
    .navbar {
      padding: var(--inset-page);
      position: relative;
    }
    .theme-background {
      background-color: var(--color-background);
    }
    .theme-surface {
      background-color: var(--color-surface);
    }
  `

  constructor() {
    super()
    this.class = ''
    this.config = {}
    this.type = ''
  }

  render() {
    return html`
      <header
        class="navbar ${this.class} theme-${this.config.header?.theme ||
        'background'}"
        id="navbar"
      >
        ${unsafeHTML(this.renderComponent())}
      </header>
    `
  }

  renderComponent() {
    // Implement your method to render the component
    return `<nd-navbar .config=${JSON.stringify(this.config)} .type=${this.type}></nd-navbar>`
  }
}

customElements.define('nd-header', NdHeader)
