import { LitElement, html, css } from 'lit'

class NdAvatar extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: inline-block;
          border-radius: 50%;
          overflow: hidden;
          width: 100px;
          height: 100px;
          border: 2px solid #ccc;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `,
    ]
  }

  static get properties() {
    return {}
  }

  constructor() {
    super()
  }

  render() {
    return html`<img />`
  }
}

customElements.define('nd-avatar', NdAvatar)
