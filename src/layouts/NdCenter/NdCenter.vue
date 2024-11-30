<!-- The Center - Center something -->
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
  center: true,
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
.center {
  box-sizing: content-box;
  margin: auto;
}

.center-vertical {
  box-sizing: content-box;
  margin-block: auto;
}

.center-horizontal {
  box-sizing: content-box;
  margin-inline: auto;
}

.center-intrinsic {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.center-text {
  text-align: center;
}

.auto {
  margin: auto;
}

.start {
  box-sizing: content-box;
  margin-inline-end: auto;
}

.end {
  box-sizing: content-box;
  margin-inline-start: auto;
  inline-size: fit-content;
}
</style>
