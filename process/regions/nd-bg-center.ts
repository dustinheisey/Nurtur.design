import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


interface ImageProps {
  src: string;
}

interface ButtonProps {
  href: string;
  label: string;
  variant?: string;
}

@customElement('bg-center-region')
export class BgCenterRegion extends LitElement {
  @property({ type: Object })
  img!: ImageProps;

  @property({ type: String })
  overrides = '';

  @property({ type: String })
  badge = '';

  @property({ type: String })
  headline = '';

  @property({ type: String })
  body = '';

  @property({ type: Object })
  btn?: ButtonProps;

  static styles = [ css``];

  render() {
    return html`
      <div
        class="bg-img theme-primary"
        style="--img: url('/img/${this.img.src}-400w.jpeg')"
      >
        <div class="cover ${this.overrides} cover-nav">
          <div
            class="principle inset region prose stack align-center text-center gap-xs"
          >
            ${this.badge ?
              html` <a href="/" class="badge badge-primary">${this.badge}</a> `
            : ''}
            <h1>${this.headline}</h1>
            <p>${this.body}</p>
            ${this.btn ?
              html`
                <a
                  href="${this.btn.href}"
                  class="btn ${this.btn.variant || ''}"
                >
                  ${this.btn.label}
                </a>
              `
            : ''}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bg-center-region': BgCenterRegion;
  }
}
