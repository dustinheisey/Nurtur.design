import { LitElement, html, css } from 'lit'

class NdBreadcrumb extends LitElement {
  static properties = {
    items: { type: Array },
  }

  static styles = css`
    nav.breadcrumb ol {
      list-style: none;
      margin: 0;
      padding-left: 0;
      display: flex;
      gap: var(--space-xs);
    }

    .breadcrumb li + li::before {
      border-right: 0.1em solid var(--color-primary);
      content: '';
      display: inline-block;
      height: 0.8em;
      margin-inline-end: var(--space-xs);
      transform: rotate(15deg);
    }

    nav.breadcrumb [aria-current='page'] {
      color: var(--color-primary);
      font-weight: 600;
      text-decoration: none;
    }
  `

  render() {
    return html`
      <nav class="breadcrumb">
        <ol>
          ${this.items.map(
            (item, index) => html`
              <li>
                <a
                  href="${item.href}"
                  aria-current="${index === this.items.length - 1
                    ? 'page'
                    : null}"
                  >${item.label}</a
                >
              </li>
            `
          )}
        </ol>
      </nav>
    `
  }
}

customElements.define('nd-breadcrumb', NdBreadcrumb)
