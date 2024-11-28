import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import './base/nd-theme.js';

@customElement('nurtur-design')
export class NurturDesign extends LitElement {
  static styles = [
    css`
      h1 {
        color: var(--color-primary);
      }
    `
  ];

  render() {
    return html`
      <nd-theme>
        <main>
          <h1
            style="font-family: var(--font-family-headline); font-size: var(--font-size-4xl)"
          >
            Hello world!
          </h1>
        </main>
      </nd-theme>
    `;
  }
}
