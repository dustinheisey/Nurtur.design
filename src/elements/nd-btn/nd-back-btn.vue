<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { EaBtn } from '@/components';

const router = useRouter();
</script>

<template>
  <ea-btn @click="() => router.back()" variant="icon" icon="back" id="back_btn"></ea-btn>
</template>
