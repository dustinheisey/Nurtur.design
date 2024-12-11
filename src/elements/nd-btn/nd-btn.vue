<script setup lang="ts">
import { EaIcon } from '@/elements';
import type { Icon } from '@/types';
import { computed } from 'vue';

const {
  variant = 'primary',
  label,
  icon,
  size = 'm',
  href
} = defineProps<{
  variant?: 'primary' | 'secondary' | 'tertiary' | 'icon' | 'icon-subtle';
  icon?: Icon;
  label?: string;
  size?: 's' | 'm' | 'l';
  href?: string;
}>();

const classes = computed(() => ['btn', 'btn-' + variant, size && 'btn-' + size, 'gap-xs']);
</script>

<template>
  <component :is="href ? 'router-link' : 'button'" :to="href" :class="classes" :aria-label="label">
    <ea-icon v-if="icon" :name="icon" :size="size" />
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.btn {
  border-radius: var(--radius-s);
  padding: var(--space-xs) var(--space-s);
}

.btn-icon {
  background: var(--color-surface-container-high);
  border-color: var(--color-surface-container-high);
  color: var(--color-primary);
  padding: var(--space-xs);
}

.btn-icon-subtle {
  background: transparent;
  border-color: transparent;
  color: var(--color-on-surface);
  padding: var(--space-2xs);
  box-shadow: none;

  &:hover {
    background: var(--color-surface-container);
    border-color: var(--color-surface-container);
    box-shadow: none;
    transform: none;
  }
}

.btn {
  color-scheme: light;
  font-family: var(--font-family-body);
  font-weight: 400;
  letter-spacing: var(--letter-spacing-body);
  color: var(--color-on-btn, var(--color-on-primary));
  line-height: var(--line-height-body);
  font-size: var(--font-size-s);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3xs);
  inline-size: auto;
  cursor: pointer;
  background-color: var(--color-primary);
  border-radius: var(--radius-pill);
  border: 1.5px solid var(--color-primary);
  padding: var(--space-2xs) var(--space-s);
  box-shadow: var(--shadow-xs);
  transition: all 0.2s ease-in-out;
  position: relative;
  transform: translate3d(0, 0, 0);
  will-change: transform;
}
.btn:hover {
  box-shadow: var(--shadow-m);
  transform: translate3d(0, -2px, 0);
}
.btn-secondary {
  background-color: transparent;
  color: var(--color-btn, var(--color-primary));
  border-color: var(--color-btn, var(--color-primary));
  box-shadow: none;
}
.btn-secondary:hover {
  color: var(--color-on-btn, var(--color-primary));
  border-color: var(--color-btn, var(--color-primary));
  box-shadow: none;
}
.btn-tertiary {
  background-color: transparent;
  color: var(--color-btn, var(--color-primary));
  border-color: transparent;
  box-shadow: none;
  font-size: var(--font-size-s);
  padding-inline-start: 0;
}
.btn-tertiary.btn-l {
  font-size: var(--font-size-l);
}
.btn-tertiary:hover {
  border-color: transparent;
  background-color: transparent;
  box-shadow: none;
}
.btn-s {
  padding: var(--space-3xs) var(--space-xs);
}
.btn-l {
  padding: var(--space-2xs) var(--space-l);
}
.btn-circular {
  inline-size: 50px;
  block-size: 50px;
  padding: 0;
}
.btn-circular.btn-s {
  inline-size: 44px;
  block-size: 44px;
  padding: 0;
}
.btn-circular.btn-l {
  inline-size: 56px;
  block-size: 56px;
  padding: 0;
}
</style>

<!-- <script lang="ts" setup>
import { useRouter } from 'vue-router';
import { EaBtn } from '@/elements';

const router = useRouter();
</script>

<template>
  <ea-btn @click="() => router.back()" variant="icon" icon="back" id="back_btn"></ea-btn>
</template> -->
