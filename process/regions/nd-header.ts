import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { global } from '../index.css.js';

interface HeaderConfig {
  header: {
    theme?: string;
  };
}

@customElement('header-region')
export class HeaderRegion extends LitElement {
  @property({ type: String })
  overrides = '';

  @property({ type: Object })
  config!: HeaderConfig;

  @property({ type: String })
  type = '';

  static styles = [global, css``];

  render() {
    return html`
      <header
        class="navbar ${this.overrides} theme-${this.config.header.theme ||
        'background'}"
        id="navbar"
      >
        <slot></slot>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'header-region': HeaderRegion;
  }
}
