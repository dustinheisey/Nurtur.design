import { LitElement, html, css } from 'lit'

class NdArticle extends LitElement {
  static properties = {
    imgSrc: { type: String },
    imgAlt: { type: String },
    time: { type: Object },
    headline: { type: String },
    body: { type: String },
    btn: { type: Object },
  }

  static styles = css`
    .sidebar {
      display: flex;
      gap: var(--space-m);
    }

    .fixed {
      flex-shrink: 0;
    }

    .frame {
      overflow: hidden;
      border-radius: var(--radius-m);
    }

    .avatar-img img {
      display: block;
      width: 100%;
      height: auto;
    }

    .cluster {
      display: flex;
      gap: var(--space-xs);
    }

    .prose {
      max-width: 60ch;
    }

    .btn {
      display: inline-block;
      padding: var(--space-xs) var(--space-s);
      background-color: var(--color-primary);
      color: var(--color-on-primary);
      border-radius: var(--radius-s);
      text-decoration: none;
      font-size: var(--font-size-body);
    }

    .title-section {
      font-size: var(--font-size-xl);
      margin: var(--space-s) 0;
    }
  `

  render() {
    return html`
      <article class="sidebar">
        <div class="fixed frame avatar-img">
          <img src="${this.imgSrc}" alt="${this.imgAlt}" />
        </div>
        <div>
          ${this.time
            ? html` <div class="cluster">
                <time datetime="${this.time.time}">${this.time.label}</time>
              </div>`
            : ''}
          <div class="prose">
            ${this.btn
              ? html` <h2 class="title-section">${this.headline}</h2>`
              : html` <a href="/">
                  <h2 class="title-section">${this.headline}</h2>
                </a>`}
            <p>${this.body}</p>
            ${this.btn
              ? html` <a class="btn" href="${this.btn.href}"
                  >${this.btn.label}</a
                >`
              : ''}
          </div>
        </div>
      </article>
    `
  }
}

customElements.define('nd-article', NdArticle)
