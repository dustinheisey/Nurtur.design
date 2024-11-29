import { Meta, StoryObj } from '@storybook/vue3';
import NdGrid from './NdGrid.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdGrid> = {
  title: 'Layout/NdGrid',
  component: NdGrid,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdGrid> = {
  render: args => ({
    components: { NdGrid },
    setup() {
      return { args };
    },
    template: `
      <NdGrid v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdGrid>
    `
  })
};
