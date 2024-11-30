<script setup lang="ts">
const props = defineProps<{
  theme?: string;
}>();

withDefaults(props, {
  theme: ''
});
</script>

<template>
  <div :class="['cover', 'sidebar', 'align-stretch', 'sidebar-split', 'gap-m', `theme-${theme}`]">
    <slot name="start" class="fixed"></slot>
    <slot name="end" class="fixed"></slot>
  </div>
</template>
