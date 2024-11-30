import { Meta, StoryObj } from '@storybook/vue3';
import NdSwitcher from './NdSwitcher.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdSwitcher> = {
  title: 'Layouts/NdSwitcher',
  component: NdSwitcher,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdSwitcher> = {
  render: args => ({
    components: { NdSwitcher },
    setup() {
      return { args };
    },
    template: `
      <NdSwitcher v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdSwitcher>
    `
  })
};
