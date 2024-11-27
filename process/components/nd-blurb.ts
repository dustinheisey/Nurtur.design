import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { global } from '../index.css.js';

interface ImageProps {
  variant?: 'avatar';
  src?: string;
  alt?: string;
}

@customElement('nd-blurb')
export class NdBlurb extends LitElement {
  @property({ type: String })
  overrides?: string;

  @property({ type: Object })
  img?: ImageProps;

  @property({ type: String })
  variant?: 'stack';

  @property({ type: String })
  icon?: string;

  @property({ type: String })
  headline: string = '';

  @property({ type: String })
  url?: string;

  @property({ type: String })
  body: string = '';

  static styles = [
    global,
    css`
      .blurb {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
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
  ];

  private renderImage() {
    if (!this.img) return '';

    return html`
      <div class="frame">
        ${this.img.variant === 'avatar' ?
          html`<img src="https://i.pravatar.cc/300" alt="avatar" />`
        : html`<img
            src="./public/img/${this.img.src}"
            alt="${ifDefined(this.img.alt)}"
          />`}
      </div>
    `;
  }

  private renderHeadline() {
    if (this.variant === 'stack') {
      return html`
        <div class="stack align-center">
          <nd-icon name="${ifDefined(this.icon)}" class="icon icon-l"></nd-icon>
          <h3 class="title-headline">${this.headline}</h3>
        </div>
      `;
    }

    return html`
      <h3 class="${this.url ? 'section-headline' : 'title-headline'}">
        ${this.icon ?
          html`<nd-icon name="${this.icon}" class="icon"></nd-icon>`
        : ''}
        ${this.url ?
          html`<a href="${this.url}" class="link-navigation"
            >${this.headline}</a
          >`
        : this.headline}
      </h3>
    `;
  }

  render() {
    return html`
      <div class="${this.overrides} prose">
        ${this.renderImage()} ${this.renderHeadline()}
        <p>${this.body}</p>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nd-blurb': NdBlurb;
  }
}
