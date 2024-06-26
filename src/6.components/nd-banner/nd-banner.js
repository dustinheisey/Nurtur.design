import { LitElement, html, css } from 'lit'

class NdBanner extends LitElement {
  static properties = {
    message: { type: String },
  }

  static styles = css`
    .banner {
      align-items: center;
      background-color: var(--color-primary);
      display: flex;
      inline-size: 100vw;
      justify-content: space-between;
      left: 0;
      padding: var(--space-2xs);
      position: fixed;
      top: 0;
    }

    .banner p {
      color: var(--color-on-primary);
      flex-grow: 2;
      max-inline-size: 100%;
      text-align: center;
    }

    .banner button {
      background: transparent;
      border: none;
      color: var(--color-on-primary);
      cursor: pointer;
      padding: 0;
    }

    /* .dismissible {
      color: #222;
      font-size: 16px;
      line-height: 22px;
      position: relative;
      overflow: hidden;
    }

    .dismissible span {
      background: #fff;
      border: 2px solid rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
      box-sizing: border-box;
      display: block;
      margin: 0 auto 20px auto;
      padding: 10px;
      position: relative;
    }

    .dismissible button {
      background: rgba(0, 0, 0, 0.4);
      border: 0;
      border-radius: 100%;
      color: #fff;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
      height: 24px;
      line-height: 20px;
      margin-top: -12px;
      right: 10px;
      position: absolute;
      top: 50%;
      width: 24px;
    }

    .dismissible button:focus {
      outline: none;
    }

    .dismissible-error span {
      background-color: #ff5252;
      border-color: #ff1744;
      color: #fff;
    }

    .dismissible-error button {
      background-color: #d50000;
      color: #ffcdd2;
    }

    .dismissible-info span {
      background-color: #64b5f6;
      border-color: #2196f3;
      color: #fff;
    }

    .dismissible-info button {
      background-color: #2196f3;
      color: #e3f2fd;
    }

    .dismissible-success span {
      background-color: #9ccc65;
      border-color: #7cb342;
      color: #fff;
    }

    .dismissible-success button {
      background-color: #7cb342;
      color: #dcedc8;
    }

    .dismissible-warning span {
      background-color: #ffa726;
      border-color: #fb8c00;
      color: #fff;
    }

    .dismissible-warning button {
      background-color: #fb8c00;
      color: #ffe0b2;
    } */
  `

  render() {
    return html`
      <div class="banner">
        <p>${this.message}</p>
        <button @click="${this._dismiss}">✕</button>
      </div>
    `
  }

  _dismiss() {
    this.style.display = 'none'
  }
}

customElements.define('nd-banner', NdBanner)
