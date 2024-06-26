import { LitElement, html, css } from 'lit'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

class NdStart extends LitElement {
  static properties = {
    class: { type: String },
    content: { type: String },
  }

  static styles = css`
    .region {
      padding: var(--space-xl);
    }
    .stack {
      display: flex;
      flex-direction: column;
    }
    .text-start {
      text-align: start;
    }
    .align-start {
      align-items: flex-start;
    }
  `

  constructor() {
    super()
    this.class = ''
    this.content = ''
  }

  render() {
    return html`
      <div class="region align-start stack text-start ${this.class}">
        ${unsafeHTML(this.content)}
      </div>
    `
  }
}

customElements.define('nd-start', NdStart)
