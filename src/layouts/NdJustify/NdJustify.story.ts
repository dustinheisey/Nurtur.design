import { Meta, StoryObj } from '@storybook/vue3';
import NdJustify from './NdJustify.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdJustify> = {
  title: 'Layout/NdJustify',
  component: NdJustify,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdJustify> = {
  render: args => ({
    components: { NdJustify },
    setup() {
      return { args };
    },
    template: `
      <NdJustify v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdJustify>
    `
  })
};
