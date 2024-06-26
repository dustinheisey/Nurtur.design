import { LitElement, html, css } from 'lit'

class NdBgCenter extends LitElement {
  static properties = {
    imgSrc: { type: String },
    classes: { type: String },
    badge: { type: String },
    headline: { type: String },
    body: { type: String },
    btn: { type: Object },
  }

  static styles = css`
    .bg-img {
      background-size: cover;
      background-position: center;
      position: relative;
      width: 100%;
      height: 100vh;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .principle {
      padding: var(--space-xl);
      background: rgba(0, 0, 0, 0.5);
      border-radius: var(--radius-m);
    }

    .badge {
      margin-bottom: var(--space-xs);
      display: inline-block;
    }

    h1 {
      font-size: var(--font-size-3xl);
      margin-bottom: var(--space-s);
      color: var(--color-on-primary);
    }

    p {
      font-size: var(--font-size-m);
      margin-bottom: var(--space-m);
      color: var(--color-on-primary);
    }

    .btn {
      background-color: var(--color-secondary);
      color: var(--color-on-secondary);
      padding: var(--space-xs) var(--space-m);
      border-radius: var(--radius-pill);
      text-decoration: none;
      display: inline-block;
    }

    .btn:hover {
      background-color: var(--color-secondary-hover);
    }
  `

  constructor() {
    super()
    this.imgSrc = ''
    this.classes = ''
    this.badge = ''
    this.headline = ''
    this.body = ''
    this.btn = null
  }

  render() {
    return html`
      <div
        class="bg-img theme-primary"
        style="--img: url('/img/${this.imgSrc}-400w.jpeg')"
      >
        <div class="cover ${this.classes} cover-nav">
          <div
            class="principle inset region prose stack align-center text-center gap-xs"
          >
            ${this.badge
              ? html`<a href="/" class="badge badge-primary">${this.badge}</a>`
              : ''}
            <h1>${this.headline}</h1>
            <p>${this.body}</p>
            ${this.btn
              ? html`<a
                  href="${this.btn.href}"
                  class="btn ${this.btn.variant ? this.btn.variant : ''}"
                  >${this.btn.label}</a
                >`
              : ''}
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('nd-bg-center', NdBgCenter)
