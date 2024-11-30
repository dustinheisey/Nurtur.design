import { Meta, StoryObj } from '@storybook/vue3';
import NdFooter from './NdFooter.vue';

const meta: Meta<typeof NdFooter> = {
  title: 'Regions/NdFooter',
  component: NdFooter,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdFooter> = {
  render: args => ({
    components: { NdFooter },
    setup() {
      return { args };
    },
    template: `
      <NdFooter v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdFooter>
    `
  })
};
