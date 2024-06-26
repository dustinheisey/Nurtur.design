import { LitElement, html, css } from 'lit'

class NdAccordion extends LitElement {
  static styles = css`
    details > summary {
      cursor: pointer;
      list-style-type: none;
      padding-inline-end: var(--space-xl);
      position: relative;
    }

    details {
      display: block;
    }

    details > summary::-webkit-details-marker {
      display: none;
    }

    details > summary::before {
      content: '+';
      font-size: var(--font-size-l);
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    details[open] > summary::before {
      content: '-';
      font-size: var(--font-size-xl);
    }

    details[open] > summary {
      margin-block-end: var(--space-s);
    }
  `

  render() {
    return html`
      <details>
        <summary><slot name="summary"></slot></summary>
        <div><slot name="content"></slot></div>
      </details>
    `
  }
}

customElements.define('nd-accordion', NdAccordion)
