<script setup lang="ts">
const props = defineProps<{
  variant?: string;
  overrides?: string;
  theme?: string;
  headline?: string;
  body?: string;
  portfolio: {
    data: {
      img: string;
      alt: string;
      permalink: string;
      title: string;
      summary: string;
    };
  }[];
}>();

withDefaults(props, {
  variant: '',
  overrides: '',
  theme: 'background'
});
</script>

<template>
  <div v-if="variant === 'masonry'" :class="['region', 'stack', 'gap-l', overrides, `theme-${theme}`]">
    <h2 class="region-headline text-center center-intrinsic">{{ headline }}</h2>
    <p v-if="body">{{ body }}</p>

    <div class="grid grid-2 gap-m">
      <div v-for="item in portfolio" :key="item.data.img" class="prose">
        <div class="frame">
          <img :src="`/img/${item.data.img}`" :alt="item.data.alt" />
        </div>
        <h3 class="section-headline">
          <a :href="item.data.permalink" class="link-navigation">{{ item.data.title }}</a>
        </h3>
        <p>{{ item.data.summary }}</p>
      </div>
    </div>
  </div>
</template>
