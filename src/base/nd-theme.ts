import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { global } from '../index.css.js';

@customElement('nd-theme')
export class NdTheme extends LitElement {
  static styles = [global];

  render() {
    return html` <slot></slot> `;
  }
}
