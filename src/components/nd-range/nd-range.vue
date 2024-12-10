<script lang="ts" setup>
import { ref, useId, watch } from 'vue';

const id: string = useId();

const { value } = defineProps<{
  label: string;
  min: number | string;
  max: number | string;
  output: string;
  value: number;
}>();

const valueRef = ref<number>(value);

const emit = defineEmits<{
  (event: 'update-value', value: number): void;
}>();

watch(valueRef, newValue => {
  emit('update-value', newValue);
});
</script>

<template>
  <div class="cluster justify-between align-center full">
    <label :for="id">
      {{ label }}
      <div class="cluster gap-xs">
        <input :id="id" type="range" :min="min" :max="max" v-model="valueRef" />
        <output>{{ output }}</output>
      </div>
    </label>
  </div>
</template>

<style scoped lang="scss">
label {
  display: unset;
  inline-size: fit-content;
  margin: 0;
}
input[type='range']:focus {
  outline: none;
}

input[type='range']::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--color-primary);
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}

input[type='range']:hover::-webkit-slider-thumb {
  background: var(--color-primary);
}

input[type='range']:active::-webkit-slider-thumb {
  background: var(--color-primary);
}

input[type='range']::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border: 0;
  border-radius: 50%;
  background: var(--color-primary);
  cursor: pointer;
  transition: background 0.15s ease-in-out;
}

input[type='range']::-moz-range-thumb:hover {
  background: var(--color-primary);
}

input[type='range']:active::-moz-range-thumb {
  background: var(--color-primary);
}

input[type='range']:focus::-webkit-slider-thumb {
  box-shadow:
    0 0 0 3px var(--color-background),
    0 0 0 6px var(--color-primary);
}

input[type='range'] {
  cursor: pointer;
  appearance: none;
  border-radius: 3px;
  height: 6px;
  background-position: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  line-height: var(--line-height-body);
  vertical-align: middle;
  margin: 0;
  background-color: var(--color-outline-variant);
}
</style>
