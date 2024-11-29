import { Meta, StoryObj } from '@storybook/vue3';
import NdBgGradient from './NdBgGradient.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdBgGradient> = {
  title: 'Layout/NdBgGradient',
  component: NdBgGradient,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdBgGradient> = {
  render: args => ({
    components: { NdBgGradient },
    setup() {
      return { args };
    },
    template: `
      <NdBgGradient v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdBgGradient>
    `
  })
};
