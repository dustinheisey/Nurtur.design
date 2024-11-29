<script setup lang="ts">
import { computed } from 'vue';
import type { Align, Justify, Gap, Inset, Space, Role } from '../../types/common-types.ts';

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
  <div :class="classes" :role="role || 'group'">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.cluster {
  gap: var(--space-s);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
</style>
