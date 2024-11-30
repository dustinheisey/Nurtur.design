import { Meta, StoryObj } from '@storybook/vue3';
import NdStartHeavy from './NdStartHeavy.vue';

const meta: Meta<typeof NdStartHeavy> = {
  title: 'Regions/NdStartHeavy',
  component: NdStartHeavy,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdStartHeavy> = {
  render: args => ({
    components: { NdStartHeavy },
    setup() {
      return { args };
    },
    template: `
      <NdStartHeavy v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdStartHeavy>
    `
  })
};
