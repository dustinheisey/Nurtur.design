<!-- The Switcher - More flexible form of media queries -->
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
.switcher {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap, var(--space-m));
}

.switcher > * {
  flex-grow: 1;
  flex-basis: calc((var(--threshold) - (100% - var(--gap, var(--space-m)))) * 999);
  max-inline-size: 100%;
}

.switch-phone {
  --threshold: 480px;
}

.switch-tablet {
  --threshold: 768px;
}

.switch-desktop {
  --threshold: 1024px;
}
</style>
