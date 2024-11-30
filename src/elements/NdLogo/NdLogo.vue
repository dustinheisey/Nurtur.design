<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  src: string;
  alt: string;
  size?: 'l';
}>();

const classes = computed(() => ({
  logo: true,
  [`logo-${props.size}`]: props.size
}));
</script>

<template>
  <img :class="classes" :src="src" :alt="alt" />
</template>

<style lang="scss" scoped>
.logo {
  block-size: 2rem;
  inline-size: auto;
}

.logo-l {
  block-size: 4rem;
}
</style>
