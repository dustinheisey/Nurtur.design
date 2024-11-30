import { Meta, StoryObj } from '@storybook/vue3';
import NdBg from './NdBg.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdBg> = {
  title: 'Layout/NdBg',
  component: NdBg,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdBg> = {
  render: args => ({
    components: { NdBg },
    setup() {
      return { args };
    },
    template: `
      <NdBg v-bind="args">
        <p>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      </NdBg>
    `
  })
};
