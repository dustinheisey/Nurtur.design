<!-- The Clip - Clip container -->
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
  region?: boolean;
  clip: 'block-start-start' | 'block-start-end' | 'block-end-start' | 'block-end-end';
}>();

const classes = computed(() => ({
  clip: true,
  [`clip-${props.clip}`]: props.clip,
  '.region': props.region,
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
.clip {
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
}

.clip-block-start-start {
  clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0% 100%);
}

.clip-block-start-end {
  clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
}

.clip-block-end-start {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
}

.clip-block-end-end {
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
}
</style>
