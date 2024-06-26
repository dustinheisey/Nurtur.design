import { LitElement, html, css } from 'lit'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

class NdSparkline extends LitElement {
  static properties = {
    class: { type: String },
    headline: { type: String },
    overline: { type: String },
    body: { type: String },
    variant: { type: String },
    items: { type: Array },
  }

  static styles = css`
    .region {
      padding: var(--inset-page);
      position: relative;
    }
    .stack {
      display: flex;
      flex-direction: column;
    }
    .prose {
      max-width: var(--max-width-prose);
    }
    .center {
      text-align: center;
    }
    .text-center {
      text-align: center;
    }
    .overline {
      font-size: var(--font-size-overline);
      text-transform: uppercase;
    }
    .region-headline {
      font-size: var(--font-size-region-headline);
    }
    .sparkline {
      display: flex;
      align-items: center;
    }
    .sparkline-inline {
      flex-direction: row;
    }
    .sparkline-inline-staggered {
      flex-direction: row;
    }
    .sparkline-block-staggered {
      flex-direction: column;
    }
    .line {
      height: 1px;
      background-color: var(--color-outline);
      flex: 1;
      margin: var(--space-xs);
    }
  `

  constructor() {
    super()
    this.class = ''
    this.headline = ''
    this.overline = ''
    this.body = ''
    this.variant = 'inline'
    this.items = []
  }

  render() {
    return html`
      <div class="region stack ${this.class}">
        ${this.headline
          ? html`
              <section class="prose center text-center">
                ${this.overline
                  ? html`<p class="overline">${this.overline}</p>`
                  : ''}
                <h2 class="region-headline">${this.headline}</h2>
                ${this.body ? html`<p>${this.body}</p>` : ''}
              </section>
            `
          : ''}
        <div class="sparkline ${this._getVariantClass()}">
          ${this.items.map(
            (item) => html`
              <div class="line" aria-hidden="true"></div>
              ${unsafeHTML(item)}
            `
          )}
        </div>
      </div>
    `
  }

  _getVariantClass() {
    switch (this.variant) {
      case 'inline-staggered':
        return 'sparkline-inline-staggered'
      case 'block-staggered':
        return 'sparkline-block-staggered'
      default:
        return 'sparkline-inline'
    }
  }
}

customElements.define('nd-sparkline', NdSparkline)
