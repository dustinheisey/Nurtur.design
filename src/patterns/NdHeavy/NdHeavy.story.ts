import { Meta, StoryObj } from '@storybook/vue3';
import NdHeavy from './NdHeavy.vue';

const meta: Meta<typeof NdHeavy> = {
  title: 'Patterns/NdHeavy',
  component: NdHeavy,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdHeavy> = {
  render: args => ({
    components: { NdHeavy },
    setup() {
      return { args };
    },
    template: `
      <NdHeavy v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdHeavy>
    `
  })
};
