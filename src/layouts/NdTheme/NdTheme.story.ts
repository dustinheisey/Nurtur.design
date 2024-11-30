import { Meta, StoryObj } from '@storybook/vue3';
import NdTheme from './NdTheme.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdTheme> = {
  title: 'Layouts/NdTheme',
  component: NdTheme,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdTheme> = {
  render: args => ({
    components: { NdTheme },
    setup() {
      return { args };
    },
    template: `
      <NdTheme v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdTheme>
    `
  })
};
