import { Meta, StoryObj } from '@storybook/vue3';
import NdRadio from './NdRadio.vue';

const meta: Meta<typeof NdRadio> = {
  title: 'Elements/NdRadio',
  component: NdRadio,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdRadio> = {
  render: args => ({
    components: { NdRadio },
    setup() {
      return { args };
    },
    template: `
      <NdRadio v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdRadio>
    `
  })
};
