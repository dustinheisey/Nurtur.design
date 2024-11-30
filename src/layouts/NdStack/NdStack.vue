<!-- The Stack - Even vertical spacing -->
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
.stack {
  display: flex;
  flex-direction: column;
}

.stack > * {
  margin-block: 0;
}

.stack > * + * {
  margin-block-start: var(--gap, var(--space-xl));
}

.stack > :only-child {
  margin-block: auto;
}

.stack > .split {
  margin-block-end: auto;
}

.stack > .auto {
  margin-block: auto;
}

.stack-bg {
  background-color: var(--color-background);
  border-radius: var(--radius-s);
  padding: var(--space-2xs);
}
</style>
