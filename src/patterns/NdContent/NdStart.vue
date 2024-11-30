<script setup lang="ts">
const props = defineProps<{
  overrides?: string;
}>();

withDefaults(props, {
  overrides: ''
});
</script>

<template>
  <div :class="['region', 'align-start', 'stack', 'text-start', overrides]">
    <slot></slot>
  </div>
</template>
