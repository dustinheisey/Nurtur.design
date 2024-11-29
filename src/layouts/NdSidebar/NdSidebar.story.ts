import { Meta, StoryObj } from '@storybook/vue3';
import NdSidebar from './NdSidebar.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdSidebar> = {
  title: 'Layout/NdSidebar',
  component: NdSidebar,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdSidebar> = {
  render: args => ({
    components: { NdSidebar },
    setup() {
      return { args };
    },
    template: `
      <NdSidebar v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdSidebar>
    `
  })
};
