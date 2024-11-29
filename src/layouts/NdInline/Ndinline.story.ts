import { Meta, StoryObj } from '@storybook/vue3';
import NdInline from './NdInline.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdInline> = {
  title: 'Layout/NdInline',
  component: NdInline,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdInline> = {
  render: args => ({
    components: { NdInline },
    setup() {
      return { args };
    },
    template: `
      <NdInline v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdInline>
    `
  })
};
