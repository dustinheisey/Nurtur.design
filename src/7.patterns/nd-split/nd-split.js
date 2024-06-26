import { LitElement, html, css } from 'lit'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

class NdSplit extends LitElement {
  static properties = {
    theme: { type: String },
    start: { type: Object },
    end: { type: Object },
  }

  static styles = css`
    .cover {
      display: flex;
      width: 100%;
    }
    .sidebar {
      display: flex;
    }
    .align-stretch {
      align-items: stretch;
    }
    .sidebar-split {
      gap: var(--space-m);
    }
  `

  constructor() {
    super()
    this.theme = 'default'
    this.start = {}
    this.end = {}
  }

  render() {
    return html`
      <div
        class="cover sidebar align-stretch sidebar-split theme-${this.theme}"
      >
        <div class="fixed">${unsafeHTML(this.start)}</div>
        <div class="fixed">${unsafeHTML(this.end)}</div>
      </div>
    `
  }
}

customElements.define('nd-split', NdSplit)
