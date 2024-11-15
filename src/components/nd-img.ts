import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { global } from '../index.css.js';

@customElement('nd-img')
export class NdImg extends LitElement {
  @property({ type: String })
  overrides?: string;

  @property({ type: String })
  ar?: string;

  @property({ type: String })
  variant?: 'avatar';

  @property({ type: String })
  src?: string;

  @property({ type: String })
  alt?: string;

  static styles = [
    global,
    css`
      .frame {
        display: block;
        position: relative;
        overflow: hidden;
      }
    `
  ];

  render() {
    return html`
      <div class="${this.overrides} frame ${this.ar || ''}">
        ${this.variant === 'avatar' ?
          html`<img src="https://i.pravatar.cc/300" alt="avatar" />`
        : html`<img
            src="./public/img/${this.src}"
            alt="${ifDefined(this.alt)}"
          />`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nd-img': NdImg;
  }
}
