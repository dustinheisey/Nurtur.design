import { Meta, StoryObj } from '@storybook/vue3';
import NdImage from './NdImage.vue';

const meta: Meta<typeof NdImage> = {
  title: 'Elements/NdImage',
  component: NdImage,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdImage> = {
  render: args => ({
    components: { NdImage },
    setup() {
      return { args };
    },
    template: `
      <NdImage v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdImage>
    `
  })
};
