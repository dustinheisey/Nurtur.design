import { Meta, StoryObj } from '@storybook/vue3';
import NdGallery from './NdGallery.vue';

const meta: Meta<typeof NdGallery> = {
  title: 'Patterns/NdGallery',
  component: NdGallery,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdGallery> = {
  render: args => ({
    components: { NdGallery },
    setup() {
      return { args };
    },
    template: `
      <NdGallery v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdGallery>
    `
  })
};
