<script setup lang="ts">
import { useId } from 'vue';
import { useThemeStore } from '@/stores/accessibility';

const id: string = useId();

const themeStore = useThemeStore();

const emit = defineEmits<{
  (event: 'switch-theme'): void;
}>();

const switchTheme = () => {
  emit('switch-theme');
};
</script>

<template>
  <div class="cluster justify-between align-center full">
    <div class="cluster gap-xs">
      <button
        @click="switchTheme"
        class="theme-switch"
        :aria-label="themeStore.theme === 'dark' ? 'Disable dark mode' : 'Enable dark mode'"
        type="button"
        :id
        aria-live="polite"
      >
        <svg focusable="false" class="sun-and-moon" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
          <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="var(--color-primary)" />
          <g class="sun-beams" stroke="var(--color-primary)">
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
            <rect x="0" y="0" height="100%" width="100%" fill="white" />
            <circle cx="24" cy="10" r="6" fill="black" />
          </mask>
        </svg>
      </button>
      <output aria-label="Current theme">{{ themeStore.themeFormatted }}</output>
    </div>
  </div>
</template>

<style scoped lang="scss">
label {
  display: unset;
  inline-size: fit-content;
  margin: 0;
}

.theme-switch {
  color: var(--color-primary);

  --size: 1.5rem;
  --icon-fill: var(--color-primary);
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

.theme-switch {
  background: none;
  border: none;
  padding: 0;
  inline-size: var(--size);
  block-size: var(--size);
  aspect-ratio: 1/1;
  border-radius: 50%;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  outline-offset: 5px;
}

.theme-switch > svg {
  inline-size: 100%;
  block-size: 100%;
  stroke-linecap: round;
}

.sun-and-moon > .sun,
.sun-and-moon > .moon,
.sun-and-moon > .sun-beams {
  transform-origin: center center;
}

.sun-and-moon > .moon circle {
  transform: translateX(7px);
}

[data-theme='dark'] .sun-and-moon > .moon circle {
  transform: translateX(-7px);
}

[data-theme='dark'] .sun-and-moon > .sun {
  transform: scale(1.75);
}

[data-theme='dark'] .sun-and-moon > .sun-beams {
  opacity: 0;
}

.theme-switch > .sun-and-moon > .sun {
  fill: var(--icon-fill);
}

.theme-switch:is(:hover, :focus-visible) > .sun-and-moon > .sun {
  fill: var(--icon-fill);
}

.theme-switch:is(:hover, :focus-visible) > .sun-and-moon > .sun-beams {
  stroke: var(--icon-fill);
}

[data-theme='dark'] .theme-switch > .sun-and-moon > .sun {
  fill: var(--icon-fill);
}

[data-theme='dark'] .theme-switch:is(:hover, :focus-visible) > .sun-and-moon > .sun {
  fill: var(--icon-fill);
}

[data-theme='dark'] .theme-switch > .sun-and-moon > .sun-beams {
  stroke: var(--icon-fill);
}

[data-theme='dark'] .theme-switch:is(:hover, :focus-visible) > .sun-and-moon > .sun-beams {
  stroke: var(--icon-fill);
}

@media (hover: none) {
  .theme-switch {
    --size: 2rem;
  }
}
</style>
