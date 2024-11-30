import { Meta, StoryObj } from '@storybook/vue3';
import NdPortfolio from './NdPortfolio.vue';

const meta: Meta<typeof NdPortfolio> = {
  title: 'Regions/NdPortfolio',
  component: NdPortfolio,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdPortfolio> = {
  render: args => ({
    components: { NdPortfolio },
    setup() {
      return { args };
    },
    template: `
      <NdPortfolio v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdPortfolio>
    `
  })
};
