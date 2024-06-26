import { LitElement, html, css } from 'lit'

class NdCard extends LitElement {
  static properties = {
    url: { type: String },
    theme: { type: String },
    icon: { type: String },
    headline: { type: String },
    body: { type: String },
    variant: { type: String },
    items: { type: Array },
    time: { type: String },
    label: { type: String },
    span: { type: String },
    gap: { type: String },
  }

  static styles = css`
    .card {
      border-radius: var(--radius-l);
      box-shadow: var(--shadow-l);
      padding: var(--space-m);
    }

    .card.card-link {
      position: relative;
      transform: translate3d(0, 0, 0);
      transition: all 0.2s ease-in-out;
      will-change: transform;
    }

    .card.card-link:hover {
      box-shadow: var(--shadow-xl);
      transform: translate3d(0, -2px, 0);
    }

    .card-image {
      padding: 0;
    }

    .card-image img,
    .card-image .frame {
      border-radius: var(--radius-l) var(--radius-l) 0 0;
    }

    .card-image > .content {
      padding: var(--space-m);
    }
  `

  render() {
    return html`
      ${this.url
        ? html`
            <a
              href="${this.url}"
              class="prose stack card card-link theme-${this.theme}"
            >
              ${this.icon
                ? html`<img src="${this.icon}" class="icon icon-l" />`
                : ''}
              <h3 class="title-headline">${this.headline}</h3>
              <p>${this.body}</p>
            </a>
          `
        : html`
            <article
              class="justify-start card theme-${this.theme} ${this.span
                ? `span-${this.span}`
                : ''} stack gap-xs"
            >
              ${this.variant === 'list'
                ? html`
                    <ul class="stack gap-${this.gap || 'm'}">
                      ${this.items.map(
                        (item) => html`
                          <li class="inline align-start gap-xs">
                            ${item.icon
                              ? html`<img
                                  src="${item.icon}"
                                  class="icon-secondary"
                                />`
                              : ''}
                            ${item.text || item}
                          </li>
                        `
                      )}
                    </ul>
                  `
                : html`
                    ${this.time
                      ? html`
                          <div class="cluster">
                            <time datetime="${this.time}">${this.label}</time>
                          </div>
                        `
                      : ''}
                    <h3 class="title-headline">
                      ${this.icon
                        ? html`<img src="${this.icon}" class="icon" />`
                        : ''}${this.headline}
                    </h3>
                    <p>${this.body}</p>
                  `}
            </article>
          `}
    `
  }
}

customElements.define('nd-card', NdCard)
