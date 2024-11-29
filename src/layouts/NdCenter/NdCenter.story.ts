import { Meta, StoryObj } from '@storybook/vue3';
import NdCenter from './NdCenter.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdCenter> = {
  title: 'Layout/NdCenter',
  component: NdCenter,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdCenter> = {
  render: args => ({
    components: { NdCenter },
    setup() {
      return { args };
    },
    template: `
      <NdCenter v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdCenter>
    `
  })
};
