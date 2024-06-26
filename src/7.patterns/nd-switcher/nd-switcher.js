import { LitElement, html, css } from 'lit'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

class NdSwitcher extends LitElement {
  static properties = {
    theme: { type: String },
    align: { type: String },
    class: { type: String },
    headline: { type: String },
    overline: { type: String },
    body: { type: String },
    items: { type: Array },
  }

  static styles = css`
    .region {
      padding: var(--space-xl);
    }
    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--space-m);
    }
    .align-center {
      align-items: center;
    }
    .text-center {
      text-align: center;
    }
    .switcher {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-m);
    }
    .switch-phone {
      flex-direction: column;
    }
  `

  constructor() {
    super()
    this.theme = 'background'
    this.align = ''
    this.class = ''
    this.headline = ''
    this.overline = ''
    this.body = ''
    this.items = []
  }

  render() {
    return html`
      <div
        class="theme-${this.theme} ${this.align ? `align-${this.align}` : ''}"
      >
        <div class="region stack ${this.class}">
          ${this.headline
            ? html`
                <section class="prose center stack align-center text-center">
                  ${this.overline
                    ? html`<p class="overline">${this.overline}</p>`
                    : ''}
                  <h2 class="page-headline">${this.headline}</h2>
                  ${this.body ? html`<p>${this.body}</p>` : ''}
                </section>
              `
            : ''}
          <div class="switcher switch-phone">
            ${this.items.map((item) => unsafeHTML(item))}
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('nd-switcher', NdSwitcher)
