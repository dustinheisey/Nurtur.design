import { Meta, StoryObj } from '@storybook/vue3';
import NdClip from './NdClip.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdClip> = {
  title: 'Layout/NdClip',
  component: NdClip,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdClip> = {
  render: args => ({
    components: { NdClip },
    setup() {
      return { args };
    },
    template: `
      <NdClip v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdClip>
    `
  })
};
