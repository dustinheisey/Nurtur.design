import { Meta, StoryObj } from '@storybook/vue3';
import NdBlog from './NdBlog.vue';

const meta: Meta<typeof NdBlog> = {
  title: 'Patterns/NdBlog',
  component: NdBlog,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdBlog> = {
  render: args => ({
    components: { NdBlog },
    setup() {
      return { args };
    },
    template: `
      <NdBlog v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdBlog>
    `
  })
};
