import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('nd-reading-progress')
export class NdReadingProgress extends LitElement {
  private timeOfLastScroll = 0;

  private requestedAniFrame = false;

  private winHeight = 1000;

  private bottom = 10000;

  static styles = [
    css`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--color-primary);
        transform: translate(-100vw, 0);
        transition: transform 0.2s ease;
      }
    `
  ];

  private updateProgress() {
    this.requestedAniFrame = false;
    const percent = Math.min((document.scrollingElement!.scrollTop / (this.bottom - this.winHeight)) * 100, 100);

    this.style.transform = `translate(-${100 - percent}vw, 0)`;

    if (Date.now() - this.timeOfLastScroll < 3000) {
      requestAnimationFrame(() => this.updateProgress());
      this.requestedAniFrame = true;
    }
  }

  private handleScroll = () => {
    if (!this.requestedAniFrame) {
      requestAnimationFrame(() => this.updateProgress());
      this.requestedAniFrame = true;
    }
    this.timeOfLastScroll = Date.now();
  };

  connectedCallback() {
    super.connectedCallback();
    if (window.ResizeObserver) {
      this.addEventListener('scroll', this.handleScroll);

      new ResizeObserver(() => {
        this.bottom =
          document.scrollingElement!.scrollTop +
          document.querySelector('#comments,footer')!.getBoundingClientRect().top;
        this.winHeight = window.innerHeight;
        this.handleScroll();
      }).observe(document.body);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nd-reading-progress': NdReadingProgress;
  }
}
