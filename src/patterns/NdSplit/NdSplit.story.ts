import { Meta, StoryObj } from '@storybook/vue3';
import NdSplit from './NdSplit.vue';

const meta: Meta<typeof NdSplit> = {
  title: 'Regions/NdSplit',
  component: NdSplit,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdSplit> = {
  render: args => ({
    components: { NdSplit },
    setup() {
      return { args };
    },
    template: `
      <NdSplit v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdSplit>
    `
  })
};
