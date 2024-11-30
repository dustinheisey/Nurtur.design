import { Meta, StoryObj } from '@storybook/vue3';
import NdFrame from './NdFrame.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdFrame> = {
  title: 'Layouts/NdFrame',
  component: NdFrame,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdFrame> = {
  render: args => ({
    components: { NdFrame },
    setup() {
      return { args };
    },
    template: `
      <NdFrame v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdFrame>
    `
  })
};
