import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { global } from './index.css.js';

@customElement('nurtur-design')
export class NurturDesign extends LitElement {
  static styles = [
    global,
    css`
      h1 {
        color: red;
      }
    `
  ];

  render() {
    return html`
      <main>
        <h1 style="font-size: var(--font-size-4xl)">Hello world!</h1>
      </main>
    `;
  }
}
