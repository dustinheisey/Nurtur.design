<!-- The Mosaic - Design specific grid layout -->
<script setup lang="ts">
import { computed } from 'vue';
import type { Align, Justify, Gap, Inset, Space } from '../layout-types.ts';

type Role = 'group';

const props = defineProps<{
  grid: string;
  align?: Align;
  justify?: Justify;
  gap?: Gap;
  inset?: Inset;
  space?: Space;
  role?: Role;
  region?: boolean;
}>();

const classes = computed(() => ({
  mosaic: true,
  [`${props.align}`]: props.align,
  '.region': props.region,
  [`${props.justify}`]: props.justify,
  [`${props.gap}`]: props.gap,
  [`${props.inset}`]: props.inset,
  [`${props.space}`]: props.space
}));

const styles = computed(() => ({
  '--mosaic': props.grid
}));
</script>

<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.mosaic {
  --mosaic: 'one one two' 'one one three' 'four five six';

  grid-template-columns: repeat(12, 1fr);
  grid-template-areas: var(--mosaic);
}

.mosaic > :nth-child(1) {
  grid-area: one;
}

.mosaic > :nth-child(2) {
  grid-area: two;
}

.mosaic > :nth-child(3) {
  grid-area: three;
}

.mosaic > :nth-child(4) {
  grid-area: four;
}

.mosaic > :nth-child(5) {
  grid-area: five;
}

.mosaic > :nth-child(6) {
  grid-area: six;
}

.mosaic > :nth-child(7) {
  grid-area: seven;
}

.mosaic > :nth-child(8) {
  grid-area: eight;
}

.mosaic > :nth-child(9) {
  grid-area: nine;
}

.mosaic > :nth-child(10) {
  grid-area: ten;
}

.mosaic > :nth-child(11) {
  grid-area: eleven;
}

.mosaic > :nth-child(12) {
  grid-area: twelve;
}
</style>
;
