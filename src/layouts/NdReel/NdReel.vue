<!-- The Reel - Horizontal scrolling -->
<script setup lang="ts">
import { computed } from 'vue';
import type { Align, Justify, Gap, Inset, Space } from '../layout-types.ts';

type Role = 'group';

const props = defineProps<{
  align?: Align;
  justify?: Justify;
  gap?: Gap;
  inset?: Inset;
  space?: Space;
  role?: Role;
}>();

const classes = computed(() => ({
  cluster: true,
  [`${props.align}`]: props.align,
  [`${props.justify}`]: props.justify,
  [`${props.gap}`]: props.gap,
  [`${props.inset}`]: props.inset,
  [`${props.space}`]: props.space
}));
</script>
<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.reel > .card {
  width: 20rem;
  scroll-snap-align: start;
}

.reel {
  display: flex;
  block-size: auto;
  overflow-x: auto;
  overflow-y: hidden;
  max-inline-size: 100%;
  scrollbar-color: var(--color-primary) var(--color-background);
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
}

.reel.justify-center {
  justify-content: start !important;
}

@media (--tablet-portrait-up) {
  .reel.justify-center {
    justify-content: center !important;
  }
}

.reel.no-bar {
  scrollbar-width: none;
}

.reel.no-bar::-webkit-scrollbar {
  display: none;
}

.reel::-webkit-scrollbar {
  block-size: var(--space-m);
}

.reel::-webkit-scrollbar-track {
  background-color: var(--color-background);
}

.reel::-webkit-scrollbar-thumb {
  background-color: var(--color-background);
  background-image: linear-gradient(
    var(--color-background) 0,
    var(--color-background) calc(var(--space-m) / 4),
    var(--color-primary) calc(var(--space-m) / 4),
    var(--color-primary) calc((var(--space-m) / 4) * 3),
    var(--color-background) calc((var(--space-m) / 4) * 3)
  );
}

.reel > * {
  flex: 0 0 auto;
}

.reel > img {
  block-size: 100%;
  flex-basis: auto;
  width: auto;
}

.reel > * + * {
  margin-inline-start: var(--space-s);
}

.reel.overflowing {
  padding-block-end: var(--space-s);
}
</style>
