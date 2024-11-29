import { Meta, StoryObj } from '@storybook/vue3';
import NdCover from './NdCover.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdCover> = {
  title: 'Layout/NdCover',
  component: NdCover,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdCover> = {
  render: args => ({
    components: { NdCover },
    setup() {
      return { args };
    },
    template: `
      <NdCover v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdCover>
    `
  })
};
