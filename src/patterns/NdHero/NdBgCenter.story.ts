import { Meta, StoryObj } from '@storybook/vue3';
import NdBgCenter from './NdBgCenter.vue';

const meta: Meta<typeof NdBgCenter> = {
  title: 'Patterns/NdBgCenter',
  component: NdBgCenter,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdBgCenter> = {
  render: args => ({
    components: { NdBgCenter },
    setup() {
      return { args };
    },
    template: `
      <NdBgCenter v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdBgCenter>
    `
  })
};
