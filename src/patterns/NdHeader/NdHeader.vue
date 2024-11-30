<script setup lang="ts">
const props = defineProps<{
  overrides?: string;
  config: { header: { theme?: string } };
}>();

withDefaults(props, {
  overrides: ''
});
</script>

<template>
  <header :class="['navbar', overrides, `theme-${config.header.theme || 'background'}`]" id="navbar">
    <slot></slot>
  </header>
</template>
