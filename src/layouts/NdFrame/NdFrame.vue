<!-- The Frame - Crop media to a desired aspect ratio -->
<script setup lang="ts">
import { computed } from 'vue';
import type { Align, Justify, Gap, Inset, Space } from '../layout-types.ts';

const props = defineProps<{
  align?: Align;
  justify?: Justify;
  gap?: Gap;
  inset?: Inset;
  space?: Space;
  variant?: 'square' | 'logo' | 'vertical-s' | 'vertical' | 'photo' | 'video' | 'full';
}>();

const classes = computed(() => ({
  frame: true,
  [`${props.variant}`]: props.variant,
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
.frame {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.frame * {
  background-color: var(--color-background-light);
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;

  /* padding: var(--space-3xs); */
}

.frame.square {
  aspect-ratio: 1/1;
}

.frame.logo * {
  background-color: initial;
}

.frame.vertical-s {
  aspect-ratio: 2/3;
}

.frame.vertical {
  aspect-ratio: 1/2;
}

.frame.photo {
  aspect-ratio: 3/2;
}

.frame.video {
  aspect-ratio: 16/9;
}

.frame.full {
  inline-size: 100%;
  block-size: 100%;
}

.frame-cover,
.frame-cover > * {
  /* min-block-size: 100vh; */
  block-size: 100%;
}

@media (orientation: portrait) {
  .frame {
    aspect-ratio: 1/1;
  }
}
</style>
