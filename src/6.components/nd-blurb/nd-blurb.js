import { LitElement, html, css } from 'lit'

class NdBlurb extends LitElement {
  static properties = {
    headline: { type: String },
    body: { type: String },
    link: { type: Object },
  }

  static styles = css`
    .blurb {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    .blurb > :is(h1, h2, h3, h4, h5, h6) + p {
      margin-top: var(--space-xs);
    }

    .blurb > svg + :is(h1, h2, h3, h4, h5, h6) {
      margin-top: var(--space-s);
    }

    .blurb > p + a {
      margin-top: var(--space-2xs);
    }
  `

  render() {
    return html`
      <div class="blurb">
        ${this.headline ? html`<h2>${this.headline}</h2>` : ''}
        ${this.body ? html`<p>${this.body}</p>` : ''}
        ${this.link
          ? html`<a href="${this.link.href}">${this.link.label}</a>`
          : ''}
      </div>
    `
  }
}

customElements.define('nd-blurb', NdBlurb)
