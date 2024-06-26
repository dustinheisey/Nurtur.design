import { LitElement, html, css } from 'lit'

class NdStrip extends LitElement {
  static properties = {
    items: { type: Array },
  }

  static styles = css`
    .strip {
      display: block;
      overflow: scroll hidden;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
      scrollbar-width: none; /* Firefox */
      white-space: nowrap;
    }

    .strip::-webkit-scrollbar {
      display: none; /* Chrome, Safari, and Edge */
    }

    .strip > .card {
      scroll-snap-align: start;
      width: 20rem;
      display: inline-block;
      margin-right: var(--space-m);
    }
  `

  constructor() {
    super()
    this.items = []
  }

  render() {
    return html`
      <div class="strip">
        ${this.items.map(
          (item) => html`
            <div class="card">
              <h3>${item.headline}</h3>
              <p>${item.body}</p>
            </div>
          `
        )}
      </div>
    `
  }
}

customElements.define('nd-strip', NdStrip)
