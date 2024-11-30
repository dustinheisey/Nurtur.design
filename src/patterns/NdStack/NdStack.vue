<script setup lang="ts">
const props = defineProps<{
  overrides?: string;
  text?: string;
  align?: string;
  headline?: string;
  overline?: string;
  body?: string;
  items?: any[];
}>();
</script>

<template>
  <div :class="['region', 'inset', 'stack', overrides]">
    <section :class="['prose', text ? `text-${text}` : 'text-center', 'stack', align || 'align-center']">
      <template v-if="headline">
        <p v-if="overline" class="overline">{{ overline }}</p>
        <h2 class="page-headline">{{ headline }}</h2>
        <p v-if="body">{{ body }}</p>
      </template>
    </section>

    <div class="stack gap-xl">
      <template v-for="(_, index) in items" :key="index">
        <hr />
        <slot name="item"></slot>
      </template>
    </div>
  </div>
</template>
