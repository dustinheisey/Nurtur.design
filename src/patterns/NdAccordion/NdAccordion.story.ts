import { Meta, StoryObj } from '@storybook/vue3';
import NdAccordion from './NdAccordion.vue';

const meta: Meta<typeof NdAccordion> = {
  title: 'Patterns/NdAccordion',
  component: NdAccordion,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdAccordion> = {
  render: args => ({
    components: { NdAccordion },
    setup() {
      return { args };
    },
    template: `
      <NdAccordion v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdAccordion>
    `
  })
};
