import { LitElement, html, css } from 'lit'

class NdStats extends LitElement {
  static properties = {
    headline: { type: String },
    overline: { type: String },
    body: { type: String },
    variant: { type: String },
    items: { type: Array },
    center: { type: Boolean },
    class: { type: String },
  }

  static styles = css`
    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--space-xl);
    }

    .switcher {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xl);
    }

    .align-center {
      align-items: center;
    }

    .text-center {
      text-align: center;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-xl);
    }

    .prose {
      font-family: var(--font-family-body);
      line-height: var(--line-height-body);
    }

    .overline {
      font-size: var(--font-size-s);
      text-transform: uppercase;
      color: var(--color-primary);
    }

    .region-headline {
      font-size: var(--font-size-2xl);
      color: var(--color-on-surface);
    }

    .section-headline {
      font-size: var(--font-size-xl);
      color: var(--color-on-surface);
    }

    .gap-3xs {
      gap: var(--space-3xs);
    }

    .gap-l {
      gap: var(--space-l);
    }

    .fixed {
      position: relative;
    }
  `

  constructor() {
    super()
    this.items = []
    this.variant = 'grid'
    this.center = false
    this.class = ''
  }

  render() {
    return html`
      <div class="stack gap-xl ${this.class}">
        ${this.headline
          ? html`
              <section>
                ${this.overline
                  ? html`<p class="overline">${this.overline}</p>`
                  : ''}
                <h2 class="region-headline">${this.headline}</h2>
                ${this.body ? html`<p>${this.body}</p>` : ''}
              </section>
            `
          : ''}
        ${this.variant === 'inline'
          ? html`
              <div
                class="switcher switch-phone align-start gap-xl ${this.class}"
              >
                ${this.items.map(
                  (item) => html`
                    <div
                      class="prose stack gap-3xs ${this.center
                        ? 'align-center text-center'
                        : ''}"
                    >
                      <h3 class="section-headline">${item.headline}</h3>
                      <p>${item.body}</p>
                    </div>
                  `
                )}
              </div>
            `
          : this.variant === 'stack'
            ? html`
                <div class="stack gap-l fixed ${this.class}">
                  ${this.items.map(
                    (item) => html`
                      <div class="prose stack gap-3xs">
                        <h3 class="section-headline">${item.headline}</h3>
                        <p>${item.body}</p>
                      </div>
                    `
                  )}
                </div>
              `
            : html`
                <div class="${this.class} grid grid-2 fixed">
                  ${this.items.map(
                    (stat) => html`
                      <div class="prose stack gap-3xs">
                        <h3 class="section-headline">${stat.headline}</h3>
                        <p>${stat.body}</p>
                      </div>
                    `
                  )}
                </div>
              `}
      </div>
    `
  }
}

customElements.define('nd-stats', NdStats)
