import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { global } from '../index.css.js';

@customElement('nd-article')
export class NdArticle extends LitElement {
  @property({ type: Object })
  img: { src: string; alt: string } = { src: '', alt: '' };

  @property({ type: Object })
  time?: { time: string; label: string };

  @property({ type: String })
  headline: string = '';

  @property({ type: String })
  body: string = '';

  @property({ type: Object })
  btn?: { href: string; label: string };

  static styles = [global];

  render() {
    const imgSrc = `./public/img/${this.img.src}`;

    return html`
      <article class="sidebar">
        <div class="fixed frame avatar-img">
          <img src="${imgSrc}" alt="${this.img.alt}" />
        </div>
        <div>
          ${this.time ?
            html`
              <div class="cluster">
                <time datetime="${this.time.time}">${this.time.label}</time>
              </div>
            `
          : ''}
          <div class="prose">
            ${this.btn ?
              html` <h2 class="title-section">${this.headline}</h2> `
            : html`
                <a href="/">
                  <h2 class="title-section">${this.headline}</h2>
                </a>
              `}
            <p>${this.body}</p>
            ${this.btn ?
              html`
                <a class="btn" href="${this.btn.href}">${this.btn.label}</a>
              `
            : ''}
          </div>
        </div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nd-article': NdArticle;
  }
}
