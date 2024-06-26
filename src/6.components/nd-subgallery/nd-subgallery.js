import { LitElement, html, css } from 'lit'

class NdSubgallery extends LitElement {
  static properties = {
    headline: { type: String },
    overline: { type: String },
    body: { type: String },
    variant: { type: String },
    items: { type: Array },
    col: { type: Number },
  }

  static styles = css`
    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--space-m);
    }

    .prose {
      text-align: center;
    }

    .masonry {
      columns: 1;
      gap: var(--space-m);
    }

    .masonry > * {
      break-inside: avoid;
    }

    .masonry > * + * {
      margin-block-start: var(--space-m);
    }

    @media (--tablet-portrait-up) {
      .masonry.col-2 {
        columns: 2;
      }
    }

    @media (--tablet-landscape-up) {
      .masonry.col-3 {
        columns: 3;
      }
    }

    .grid {
      display: grid;
      gap: var(--space-m);
    }

    .grid-2 {
      grid-template-columns: repeat(2, 1fr);
    }

    .grid-3 {
      grid-template-columns: repeat(3, 1fr);
    }

    .grid-4 {
      grid-template-columns: repeat(4, 1fr);
    }
  `

  constructor() {
    super()
    this.headline = ''
    this.overline = ''
    this.body = ''
    this.variant = 'grid'
    this.items = []
    this.col = 2
  }

  render() {
    return html`
      <div class="stack ${this.class}">
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
              <div class="masonry col-${this.col} gap-m">
                ${this.items.map((item) => html`${item}`)}
              </div>
            `
          : this.variant === 'stack'
            ? html`
                <div class="stack gap-m">
                  ${this.items.map((item) => html`${item}`)}
                </div>
              `
            : html`
                <div class="grid grid-${this.col}">
                  ${this.items.map((item) => html`${item}`)}
                </div>
              `}
      </div>
    `
  }
}

customElements.define('nd-subgallery', NdSubgallery)
