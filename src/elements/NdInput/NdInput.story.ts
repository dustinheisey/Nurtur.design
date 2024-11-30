import { Meta, StoryObj } from '@storybook/vue3';
import NdInput from './NdInput.vue';

const meta: Meta<typeof NdInput> = {
  title: 'Elements/NdInput',
  component: NdInput,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdInput> = {
  render: args => ({
    components: { NdInput },
    setup() {
      return { args };
    },
    template: `
      <NdInput v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdInput>
    `
  })
};
