import { Meta, StoryObj } from '@storybook/vue3';
import NdStack from './NdStack.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdStack> = {
  title: 'Layouts/NdStack',
  component: NdStack,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdStack> = {
  render: args => ({
    components: { NdStack },
    setup() {
      return { args };
    },
    template: `
      <NdStack v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdStack>
    `
  })
};
