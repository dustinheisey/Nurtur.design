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
  <div class="bg-gradient">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.bg-gradient {
  background: linear-gradient(180deg, rgb(0 0 0 / 50%) 0%, rgb(0 0 0 / 0%) 100%) var(--color-background);
}
</style>
