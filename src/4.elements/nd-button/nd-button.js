import { LitElement, html, css } from 'lit-element'

/**
 * <nd-button> Component description here.
 *
 * @customElement
 * @litElement
 * @polymer
 */
class NdButton extends LitElement {
  /**
   * The styles for the component.
   *
   * @returns {Array}
   */
  static get styles() {
    return [
      css`
        :host {
          color-scheme: light;
          font-family: var(--font-family-body);
          font-weight: 400;
          letter-spacing: var(--letter-spacing-body);
          color: var(--color-on-btn, var(--color-on-primary));
          line-height: var(--line-height-body);
          font-size: var(--font-size-s);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-3xs);
          inline-size: auto;
          cursor: pointer;
          background-color: var(--color-primary);
          border-radius: var(--radius-pill);
          border: 1.5px solid var(--color-primary);
          padding: var(--space-2xs) var(--space-s);
          box-shadow: var(--shadow-xs);
          transition: all 0.2s ease-in-out;
          position: relative;
          transform: translate3d(0, 0, 0);
          will-change: transform;
        }

        :host:hover {
          box-shadow: var(--shadow-m);
          transform: translate3d(0, -2px, 0);
        }

        :host[variant='secondary'] {
          background-color: transparent;
          color: var(--color-btn, var(--color-primary));
          border-color: var(--color-btn, var(--color-primary));
          box-shadow: none;
        }

        :host[variant='secondary']:hover {
          color: var(--color-on-btn, var(--color-primary));
          border-color: var(--color-btn, var(--color-primary));
          box-shadow: none;
        }

        :host[variant='tertiary'] {
          background-color: transparent;
          color: var(--color-btn, var(--color-primary));
          border-color: transparent;
          box-shadow: none;
          font-size: var(--font-size-s);

          /* text-decoration: underline; */
          padding-inline-start: 0;
        }

        :host[variant='tertiary'].btn-l {
          font-size: var(--font-size-l);
        }

        :host[variant='tertiary']:hover {
          border-color: transparent;
          background-color: transparent;
          box-shadow: none;
        }

        :host[size='s'] {
          padding: var(--space-3xs) var(--space-xs);
        }

        :host[size='l'] {
          padding: var(--space-2xs) var(--space-l);
        }

        :host[variant='circular'] {
          inline-size: 50px;
          block-size: 50px;
          padding: 0;
        }

        :host[variant='circular'][size='s'] {
          inline-size: 44px;
          block-size: 44px;
          padding: 0;
        }

        :host[variant='circular'][size='l'] {
          inline-size: 56px;
          block-size: 56px;
          padding: 0;
        }
      `,
    ]
  }

  /**
   * Static getter properties.
   *
   * @returns { Object }
   */
  static get properties() {
    return {}
  }

  /**
   * Constructor for the component.
   * Binding and props initialization.
   */
  constructor() {
    super()
  }

  /**
   * Renders the component.
   *
   * @returns {HTMLElement}
   */
  render() {
    return html` <button><slot></slot></button>`
  }
}

customElements.define('nd-button', NdButton)
