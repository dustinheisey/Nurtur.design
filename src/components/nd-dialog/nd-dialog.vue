<script lang="ts" setup>
import { ref } from 'vue';
import { EaBtn } from '@/elements';
import type { Icon } from '@/types';

const modal = ref<HTMLDialogElement | null>(null);

const {
  title,
  btnVariant = 'icon',
  btnLabel
} = defineProps<{
  title: string;
  btnVariant?: 'primary' | 'secondary' | 'tertiary' | 'icon' | 'icon-subtle';
  icon?: Icon;
  btnLabel?: string;
  btnId: string;
}>();

const showModal = (): void => {
  if (modal.value) {
    modal.value.showModal();
  }
};

const closeModal = (): void => {
  if (modal.value) {
    modal.value.close();
  }
};
</script>

<template>
  <ea-btn :variant="btnVariant" :icon="icon" @click="showModal" :label="title" :id="btnId">{{ btnLabel }}</ea-btn>
  <dialog class="modal inset-s theme-surface" @close="closeModal" ref="modal" data-modal>
    <section class="stack gap-2xs">
      <div class="sidebar justify-between">
        <h2 class="color-primary">{{ title }}</h2>
        <ea-btn
          class="fixed"
          variant="icon-subtle"
          icon="close"
          @click="closeModal"
          label="Close"
          id="close_btn"
        ></ea-btn>
      </div>
      <hr />
      <slot></slot>
    </section>
  </dialog>
</template>

<style scoped lang="scss">
.modal {
  border: none;
  border-radius: var(--radius-m);
  box-shadow: var(--shadow-xl);
  background-color: var(--color-surface-container-high);
  max-width: 500px;
  width: 90%;
}

hr {
  border-block-start: 1px solid #ddd;
}
h2 {
  margin: 0;
  font-size: var(--font-size-m);
}
</style>
