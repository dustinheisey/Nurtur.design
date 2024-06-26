import { LitElement, html, css } from 'lit'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

class NdStartHeavy extends LitElement {
  static properties = {
    mobile: { type: String },
    class: { type: String },
    align: { type: String },
    start: { type: String },
    end: { type: String },
  }

  static styles = css`
    .region {
      padding: var(--space-xl);
    }
    .sidebar {
      display: flex;
      flex-direction: column;
    }
    .sidebar-split {
      display: flex;
      gap: var(--space-m);
    }
    .align-start {
      align-items: flex-start;
    }
    .align-end {
      align-items: flex-end;
    }
  `

  constructor() {
    super()
    this.mobile = 'end'
    this.class = ''
    this.align = ''
    this.start = ''
    this.end = ''
  }

  render() {
    return html`
      ${this.mobile === 'end'
        ? html`
            <div
              class="region sidebar sidebar-split gap-m ${this.class} ${this
                .align
                ? `align-${this.align}`
                : ''}"
            >
              ${unsafeHTML(this.end)} ${unsafeHTML(this.start)}
            </div>
          `
        : html`
            <div
              class="region sidebar sidebar-split gap-m ${this.class} ${this
                .align
                ? `align-${this.align}`
                : ''}"
            >
              ${unsafeHTML(this.start)} ${unsafeHTML(this.end)}
            </div>
          `}
    `
  }
}

customElements.define('nd-start-heavy', NdStartHeavy)
