import { Meta, StoryObj } from '@storybook/vue3';
import NdBgPattern from './NdBgPattern.vue';

const meta: Meta<typeof NdBgPattern> = {
  title: 'Regions/NdBgPattern',
  component: NdBgPattern,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdBgPattern> = {
  render: args => ({
    components: { NdBgPattern },
    setup() {
      return { args };
    },
    template: `
      <NdBgPattern v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdBgPattern>
    `
  })
};