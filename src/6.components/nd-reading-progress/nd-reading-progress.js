import { LitElement, html, css } from 'lit'

class NdReadingProgress extends LitElement {
  static styles = css`
    #reading-progress {
      background-color: var(--color-primary);
      block-size: 3px;
      bottom: 0;
      left: 0;
      pointer-events: none;
      position: fixed;
      right: 0;
      transform: translate(-100vw, 0);
      width: 100vw;
      will-change: transform;
      z-index: 1;
    }
  `

  render() {
    return html`<div id="reading-progress"></div>`
  }

  firstUpdated() {
    this.readingProgress()
  }

  readingProgress() {
    if (window.ResizeObserver) {
      const progress = this.shadowRoot.getElementById('reading-progress')

      let timeOfLastScroll = 0
      let requestedAniFrame = false

      const scroll = () => {
        if (!requestedAniFrame) {
          requestAnimationFrame(updateProgress)
          requestedAniFrame = true
        }
        timeOfLastScroll = Date.now()
      }
      addEventListener('scroll', scroll)

      let winHeight = 1000
      let bottom = 10000

      const updateProgress = () => {
        requestedAniFrame = false
        const percent = Math.min(
          (document.scrollingElement.scrollTop / (bottom - winHeight)) * 100,
          100
        )
        if (progress) {
          progress.style.transform = `translate(-${100 - percent}vw, 0)`
        }
        if (Date.now() - timeOfLastScroll < 3000) {
          requestAnimationFrame(updateProgress)
          requestedAniFrame = true
        }
      }

      new ResizeObserver(() => {
        bottom =
          document.scrollingElement.scrollTop +
          document.querySelector('#comments,footer').getBoundingClientRect().top
        winHeight = window.innerHeight
        scroll()
      }).observe(document.body)
    }
  }
}

customElements.define('nd-reading-progress', NdReadingProgress)
