import { Meta, StoryObj } from '@storybook/vue3';
import NdBlockquote from './NdBlockquote.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdBlockquote> = {
  title: 'Layout/NdBlockquote',
  component: NdBlockquote,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdBlockquote> = {
  render: args => ({
    components: { NdBlockquote },
    setup() {
      return { args };
    },
    template: `
      <NdBlockquote v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdBlockquote>
    `
  })
};