<script setup lang="ts">
const props = defineProps<{
  mobile?: string;
  overrides?: string;
  align?: string;
}>();

withDefaults(props, {
  mobile: '',
  overrides: '',
  align: ''
});
</script>

<template>
  <div :class="['region', 'sidebar', 'sidebar-split', 'gap-m', overrides, align ? `align-${align}` : '']">
    <slot v-if="mobile === 'end'" name="end" class="fixed"></slot>
    <slot v-if="mobile === 'end'" name="start"></slot>

    <slot v-else name="start"></slot>
    <slot v-else name="end" class="fixed"></slot>
  </div>
</template>
