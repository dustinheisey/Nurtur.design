import { Meta, StoryObj } from '@storybook/vue3';
import NdMasonry from './NdMasonry.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdMasonry> = {
  title: 'Layouts/NdMasonry',
  component: NdMasonry,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdMasonry> = {
  render: args => ({
    components: { NdMasonry },
    setup() {
      return { args };
    },
    template: `
      <NdMasonry v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdMasonry>
    `
  })
};
