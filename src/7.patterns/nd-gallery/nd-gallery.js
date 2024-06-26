import { LitElement, html, css } from 'lit'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

class NdGallery extends LitElement {
  static properties = {
    theme: { type: String },
    class: { type: String },
    headline: { type: String },
    overline: { type: String },
    body: { type: String },
    variant: { type: String },
    col: { type: Number },
    items: { type: Array },
  }

  static styles = css`
    .theme-background {
      background-color: var(--color-background);
    }
    .region {
      padding: var(--space-xl);
      margin: auto;
    }
    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--space-m);
    }
    .prose {
      font-family: var(--font-family-body);
      color: var(--color-on-background);
    }
    .center {
      text-align: center;
    }
    .align-center {
      align-items: center;
    }
    .text-center {
      text-align: center;
    }
    .page-headline {
      font-size: var(--font-size-xl);
      color: var(--color-on-background);
    }
    .overline {
      font-size: var(--font-size-s);
      color: var(--color-primary);
    }
    .masonry {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-m);
    }
    .grid {
      display: grid;
      gap: var(--space-m);
    }
    .col-3 {
      grid-template-columns: repeat(3, 1fr);
    }
    .col-2 {
      grid-template-columns: repeat(2, 1fr);
    }
  `

  constructor() {
    super()
    this.theme = 'background'
    this.class = ''
    this.headline = ''
    this.overline = ''
    this.body = ''
    this.variant = 'grid'
    this.col = 3
    this.items = []
  }

  render() {
    return html`
      <div class="theme-${this.theme}">
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
          ${this.variant === 'masonry'
            ? html`
                <div class="masonry col-3 gap-m">
                  ${this.items.map((item) =>
                    unsafeHTML(this.renderComponent(item))
                  )}
                </div>
              `
            : html`
                <div class="grid grid-${this.col}">
                  ${this.items.map((item) =>
                    unsafeHTML(this.renderComponent(item))
                  )}
                </div>
              `}
        </div>
      </div>
    `
  }

  renderComponent(item) {
    // Implement your method to render the component
    return `<div>${item.content}</div>`
  }
}

customElements.define('nd-gallery', NdGallery)
