import { Meta, StoryObj } from '@storybook/vue3';
import NdBgImage from './NdBgImage.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdBgImage> = {
  title: 'Layout/NdBgImage',
  component: NdBgImage,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdBgImage> = {
  render: args => ({
    components: { NdBgImage },
    setup() {
      return { args };
    },
    template: `
      <NdBgImage v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdBgImage>
    `
  })
};
