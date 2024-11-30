import { Meta, StoryObj } from '@storybook/vue3';
import NdReel from './NdReel.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdReel> = {
  title: 'Layouts/NdReel',
  component: NdReel,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdReel> = {
  render: args => ({
    components: { NdReel },
    setup() {
      return { args };
    },
    template: `
      <NdReel v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdReel>
    `
  })
};
