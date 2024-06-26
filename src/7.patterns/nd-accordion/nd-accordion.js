import { LitElement, html, css } from 'lit'

class NdAccordion extends LitElement {
  static properties = {
    headline: { type: String },
    overline: { type: String },
    items: { type: Array },
    class: { type: String },
  }

  static styles = css`
    .region {
      display: block;
      padding: var(--space-xl);
    }

    .prose {
      margin-bottom: var(--space-m);
    }

    .region-headline {
      font-size: var(--font-size-3xl);
      margin-bottom: var(--space-s);
    }

    .overline {
      font-size: var(--font-size-s);
      text-transform: uppercase;
      color: var(--color-secondary);
      margin-bottom: var(--space-xs);
    }

    hr {
      border: none;
      border-top: 1px solid var(--color-outline-variant);
      margin: var(--space-m) 0;
    }
  `

  constructor() {
    super()
    this.headline = ''
    this.overline = ''
    this.items = []
    this.class = ''
  }

  render() {
    return html`
      <div class="region ${this.class}">
        ${this.headline
          ? html`
              <section class="prose">
                ${this.overline
                  ? html`<p class="overline">${this.overline}</p>`
                  : ''}
                <h2 class="region-headline">${this.headline}</h2>
              </section>
            `
          : ''}
        <div class="space-xl">
          ${this.items.map(
            (item) => html`
              <div>${item}</div>
              <hr />
            `
          )}
        </div>
      </div>
    `
  }
}

customElements.define('nd-accordion', NdAccordion)
