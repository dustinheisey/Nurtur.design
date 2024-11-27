import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { global } from '../index.css.js';

@customElement('gallery-region')
export class GalleryRegion extends LitElement {
  @property({ type: String })
  theme = 'background';

  @property({ type: String })
  overrides = '';

  @property({ type: String })
  headline = '';

  @property({ type: String })
  overline = '';

  @property({ type: String })
  body = '';

  @property({ type: String })
  variant = '';

  @property({ type: Number })
  col = 3;

  @property({ type: Array })
  items = [];

  static styles = [global, css``];

  render() {
    return html`
      <div class="theme-${this.theme}">
        <div class="region stack ${this.overrides}">
          ${this.headline ?
            html`
              <section class="prose center stack align-center text-center">
                ${this.overline ?
                  html` <p class="overline">${this.overline}</p> `
                : ''}
                <h2 class="page-headline">${this.headline}</h2>
                ${this.body ? html` <p>${this.body}</p> ` : ''}
              </section>
            `
          : ''}
          ${this.variant === 'masonry' ?
            html`
              <div class="masonry col-3 gap-m">
                <slot></slot>
              </div>
            `
          : html`
              <div class="grid grid-${this.col}">
                <slot></slot>
              </div>
            `}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gallery-region': GalleryRegion;
  }
}
