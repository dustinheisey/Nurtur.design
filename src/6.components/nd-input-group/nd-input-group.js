import { LitElement, html, css } from 'lit'

class NdInputGroup extends LitElement {
  static styles = css`
    .input-group {
      align-items: stretch !important;
      border-radius: var(--radius-pill);
      display: flex;
      overflow: hidden;
    }

    .input-group > input,
    .input-group > button {
      border-radius: 0;
      margin: 0;
    }

    @media (--tablet-portrait-up) {
      .input-group {
        flex-wrap: nowrap;
      }
    }

    /* .input-group > input {
      border-radius: var(--radius-s) var(--radius-s) 0 0;
    }

    .input-group > button {
      border-radius: 0 0 var(--radius-s) var(--radius-s);
    } */

    /* .input-group > input {
      border-radius: var(--radius-s) 0 0 var(--radius-s);
      border-right: none;
      margin: 0 !important;
    }

    .input-group > button {
      border-radius: 0 var(--radius-s) var(--radius-s) 0;
      border-left: none;
    } */
  `

  render() {
    return html`
      <div class="input-group">
        <input type="text" placeholder="Enter text" />
        <button type="button">Submit</button>
      </div>
    `
  }
}

customElements.define('nd-input-group', NdInputGroup)
