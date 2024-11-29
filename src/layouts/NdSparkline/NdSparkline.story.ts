import { Meta, StoryObj } from '@storybook/vue3';
import NdSparkline from './NdSparkline.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdSparkline> = {
  title: 'Layout/NdSparkline',
  component: NdSparkline,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdSparkline> = {
  render: args => ({
    components: { NdSparkline },
    setup() {
      return { args };
    },
    template: `
      <NdSparkline v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdSparkline>
    `
  })
};
