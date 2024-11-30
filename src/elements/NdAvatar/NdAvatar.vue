<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  size?: 's' | 'l';
  src: string;
  alt: string;
}>();

const classes = computed(() => ({
  avatar: true,
  [`avatar-${props.size}`]: props.size,
  'avatar-img': props.src
}));
</script>

<template>
  <img :src :class="classes" :alt />
</template>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  inline-size: 2em;
  aspect-ratio: 1/1;
  font-size: 1.25em;
  border: 3px solid var(--color-background);
}

.avatar-s {
  font-size: 1em;
}

.avatar-l {
  font-size: 1.5em;
}
</style>
