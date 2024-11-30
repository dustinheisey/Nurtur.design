<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  label: string;
  position?: 'block-start' | 'block-end' | 'inline-start' | 'inline-end';
}>();

const classes = computed(() => ({
  [`tip-${props.position}`]: props.position
}));
</script>

<template>
  <span :class="classes">
    {{ label }}
  </span>
</template>

<style lang="scss" scoped>
span {
  display: none;
}

@media (--tablet-landscape-up) {
  span {
    display: inline-block;

    --p-inline: 1.5ch;
    --p-block: 0.75ch;
    --triangle-size: 7px;
    --bg: var(--color-surface);
    --shadow-alpha: 50%;
    --bottom-tip: conic-gradient(from -30deg at bottom, rgb(0 0 0 / 0%), #000 1deg 60deg, rgb(0 0 0 / 0%) 61deg)
      bottom / 100% 50% no-repeat;
    --top-tip: conic-gradient(from 150deg at top, rgb(0 0 0 / 0%), #000 1deg 60deg, rgb(0 0 0 / 0%) 61deg) top / 100%
      50% no-repeat;
    --right-tip: conic-gradient(from -120deg at right, rgb(0 0 0 / 0%), #000 1deg 60deg, rgb(0 0 0 / 0%) 61deg) right /
      50% 100% no-repeat;
    --left-tip: conic-gradient(from 60deg at left, rgb(0 0 0 / 0%), #000 1deg 60deg, rgb(0 0 0 / 0%) 61deg) left / 50%
      100% no-repeat;

    pointer-events: none;
    user-select: none;
    opacity: 0;
    transform: translateX(var(--x, 0)) translateY(var(--y, 0));
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
    position: absolute;
    z-index: 1;
    inline-size: max-content;
    max-inline-size: 25ch;
    text-align: start;
    font-size: 1rem;
    font-weight: normal;
    line-height: normal;
    line-height: initial;
    padding: var(--p-block) var(--p-inline);
    margin: 0;
    border-radius: 5px;
    background: var(--bg);
    color: var(--color-on-background);
    will-change: filter;
    filter: drop-shadow(0 3px 3px hsl(0deg 0% 0% / var(--shadow-alpha)))
      drop-shadow(0 12px 12px hsl(0deg 0% 0% / var(--shadow-alpha)));
  }

  /* create a stacking context for elements with > span */
  :has(> span) {
    position: relative;
  }

  /* when those parent elements have focus, hover, etc */
  :has(> span):is(:hover, :focus-visible, :active) > span {
    opacity: 1;
    transition-delay: 200ms;
  }

  /* prepend some prose for screen readers only */
  span::before {
    content: '; Has tooltip: ';
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  /* tooltip shape is a pseudo element so we can cast a shadow */
  span::after {
    content: '';
    background: var(--bg);
    position: absolute;
    z-index: -1;
    inset: 0;
    mask: var(--tip);
  }

  /* top tooltip styles */
  span:is(.tip-block-start, .tip-block-end) {
    text-align: center;
  }

  @media (prefers-color-scheme: light) {
    span {
      --shadow-alpha: 15%;
    }
  }

  span {
    --isRTL: -1;
  }

  span:dir(rtl) {
    --isRTL: 1;
  }

  span:is(.tip-block-start) {
    inset-inline-start: 50%;
    inset-block-end: calc(100% + var(--p-block) + var(--triangle-size));

    --x: calc(50% * var(--isRTL));
  }

  span:is(.tip-block-start)::after {
    --tip: var(--bottom-tip);

    inset-block-end: calc(var(--triangle-size) * -1);
    border-block-end: var(--triangle-size) solid transparent;
  }

  span.tip-inline-end {
    inset-inline-start: calc(100% + var(--p-inline) + var(--triangle-size));
    inset-block-end: 50%;

    --y: 50%;
  }

  span.tip-inline-end::after {
    --tip: var(--left-tip);

    inset-inline-start: calc(var(--triangle-size) * -1);
    border-inline-start: var(--triangle-size) solid transparent;
  }

  span.tip-inline-end:dir(rtl)::after {
    --tip: var(--right-tip);
  }

  span.tip-block-end {
    inset-inline-start: 50%;
    inset-block-start: calc(100% + var(--p-block) + var(--triangle-size));

    --x: calc(50% * var(--isRTL));
  }

  span.tip-block-end::after {
    --tip: var(--top-tip);

    inset-block-start: calc(var(--triangle-size) * -1);
    border-block-start: var(--triangle-size) solid transparent;
  }

  span.tip-inline-start {
    inset-inline-end: calc(100% + var(--p-inline) + var(--triangle-size));
    inset-block-end: 50%;

    --y: 50%;
  }

  span.tip-inline-start::after {
    --tip: var(--right-tip);

    inset-inline-end: calc(var(--triangle-size) * -1);
    border-inline-end: var(--triangle-size) solid transparent;
  }

  span.tip-inline-start:dir(rtl)::after {
    --tip: var(--left-tip);
  }

  span {
    opacity: 0;
    transform: translateX(var(--x, 0)) translateY(var(--y, 0));
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
  }

  :has(> span):is(:hover, :focus-visible, :active) > span {
    opacity: 1;
    transition-delay: 200ms;
  }

  @media (prefers-reduced-motion: no-preference) {
    :has(> span:is(.tip-block-start)):not(:hover, :focus-visible, :active) span {
      --y: 3px;
    }

    :has(> span.tip-inline-end):not(:hover, :focus-visible, :active) span {
      --x: -3px;
    }

    :has(> span.tip-block-end):not(:hover, :focus-visible, :active) span {
      --y: -3px;
    }

    :has(> span.tip-inline-start):not(:hover, :focus-visible, :active) span {
      --x: 3px;
    }
  }
}
</style>
