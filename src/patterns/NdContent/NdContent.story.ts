import { Meta, StoryObj } from '@storybook/vue3';
import NdContent from './NdContent.vue';

const meta: Meta<typeof NdContent> = {
  title: 'Patterns/NdContent',
  component: NdContent,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdContent> = {
  render: args => ({
    components: { NdContent },
    setup() {
      return { args };
    },
    template: `
      <NdContent v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdContent>
    `
  })
};
