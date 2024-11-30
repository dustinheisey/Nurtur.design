<script setup lang="ts">
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
  <section class="region stack inset-xl">
    <section class="[prose, {justify: justify, align: align, text: text}]">
      <p v-if="overline" class="overline">{{ overline }}</p>
      <h2 v-if="headline" class="region-headline">{{ headline }}</h2>
      <p v-if="body">{{ body }}</p>
    </section>

    <section class="stack">
      <slot></slot>
    </section>
  </section>
</template>
