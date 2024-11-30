import { Meta, StoryObj } from '@storybook/vue3';
import NdTextarea from './NdTextarea.vue';

const meta: Meta<typeof NdTextarea> = {
  title: 'Elements/NdTextarea',
  component: NdTextarea,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdTextarea> = {
  render: args => ({
    components: { NdTextarea },
    setup() {
      return { args };
    },
    template: `
      <NdTextarea v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdTextarea>
    `
  })
};
