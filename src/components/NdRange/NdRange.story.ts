import { Meta, StoryObj } from '@storybook/vue3';
import NdRange from './NdRange.vue';

const meta: Meta<typeof NdRange> = {
  title: 'Components/NdRange',
  component: NdRange,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdRange> = {
  render: args => ({
    components: { NdRange },
    setup() {
      return { args };
    },
    template: `
      <NdRange v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdRange>
    `
  })
};
