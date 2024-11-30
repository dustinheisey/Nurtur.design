import { Meta, StoryObj } from '@storybook/vue3';
import NdEnd from './NdEnd.vue';

const meta: Meta<typeof NdEnd> = {
  title: 'Regions/NdEnd',
  component: NdEnd,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdEnd> = {
  render: args => ({
    components: { NdEnd },
    setup() {
      return { args };
    },
    template: `
      <NdEnd v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdEnd>
    `
  })
};
