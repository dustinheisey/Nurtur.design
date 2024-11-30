<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{}>();
const classes = computed(() => ({}));
</script>

<style lang="scss" scoped>
.dark-mode-toggle {
  --size: 1.5rem;
  --icon-fill: var(--color-primary);
  color: var(--color-primary);
}

.sun-and-moon > .sun {
  fill: var(--icon-fill);
}

.dark-mode-toggle:is(:hover, :focus-visible) > .sun-and-moon > .sun {
  fill: var(--icon-fill);
}

.dark-mode-toggle:is(:hover, :focus-visible) > .sun-and-moon > .sun-beams {
  stroke: var(--icon-fill);
}

[data-theme='dark'] .dark-mode-toggle > .sun-and-moon > .sun {
  fill: var(--icon-fill);
}

[data-theme='dark'] .dark-mode-toggle > .sun-and-moon > .sun-beams {
  stroke: var(--icon-fill);
}

@media (prefers-reduced-motion: no-preference) {
  .sun-and-moon > .sun {
    transition: transform 0.5s var(--ease-elastic-3);
  }

  .sun-and-moon > .sun-beams {
    transition:
      transform 0.5s var(--ease-elastic-4),
      opacity 0.5s var(--ease-3);
  }

  .sun-and-moon > .moon > circle {
    transform: translateX(-7px);
    transition: transform 0.25s var(--ease-out-5);
  }

  [data-theme='dark'] .sun-and-moon > .sun {
    transform: scale(1.75);
    transition-timing-function: var(--ease-3);
    transition-duration: 0.25s;
  }

  [data-theme='dark'] .sun-and-moon > .sun-beams {
    transform: rotateZ(-25deg);
    transition-duration: 0.15s;
  }

  [data-theme='dark'] .sun-and-moon > .moon > circle {
    transition-delay: 0.25s;
    transition-duration: 0.5s;
  }
}
</style>

<!-- import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nd-dark-mode-toggle')
export class NdDarkModeToggle extends LitElement {
  @property({ type: String })
  private storageKey = 'theme-preference';

  @property({ type: Object })
  private theme = {
    value: this.getColorPreference()
  };

  private getColorPreference(): string {
    if (localStorage.getItem(this.storageKey)) {
      return localStorage.getItem(this.storageKey) || 'light';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private setPreference(): void {
    localStorage.setItem(this.storageKey, this.theme.value);
    this.reflectPreference();
  }

  private reflectPreference(): void {
    document.firstElementChild?.setAttribute('data-theme', this.theme.value);
    document.querySelector('#theme-toggle')?.setAttribute('aria-label', this.theme.value);
  }

  private handleClick(): void {
    this.theme.value = this.theme.value === 'light' ? 'dark' : 'light';
    this.setPreference();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.reflectPreference();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
      this.theme.value = isDark ? 'dark' : 'light';
      this.setPreference();
    });
  }

  render() {
    return html`
      <button
        type="button"
        class="dark-mode-toggle"
        id="theme-toggle"
        title="Toggles light &gt; dark"
        aria-live="polite"
        @click=${this.handleClick}
      >
        <svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
          <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
          <g class="sun-beams" stroke="currentColor">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
          <mask class="moon" id="moon-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <circle cx="24" cy="10" r="6" fill="black" />
          </mask>
        </svg>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nd-dark-mode-toggle': NdDarkModeToggle;
  }
} -->
