<script setup lang="ts">
import NdStack from '../../layouts/NdStack/NdStack.vue';
import NdProse from '../../layouts/NdProse/NdProse.vue';

defineProps<{
  justify?: 'start' | 'center' | 'end';
  align?: 'start' | 'center' | 'end';
  text?: 'start' | 'center' | 'end';
  overrides?: string;
  headline?: string;
  overline?: string;
  body?: string;
}>();
</script>

<template>
  <NdStack inset="xl" region>
    <NdProse :justify :align :text>
      <p v-if="overline" class="overline">{{ overline }}</p>
      <h2 v-if="headline" class="region-headline">{{ headline }}</h2>
      <p v-if="body">{{ body }}</p>
    </NdProse>

    <NdStack gap="">
      <slot></slot>
    </NdStack>
  </NdStack>
</template>
