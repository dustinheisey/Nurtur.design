import { Meta, StoryObj } from '@storybook/vue3';
import NdCluster from './NdCluster.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdCluster> = {
  title: 'Layouts/NdCluster',
  component: NdCluster,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdCluster> = {
  render: args => ({
    components: { NdCluster },
    setup() {
      return { args };
    },
    template: `
      <NdCluster v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdCluster>
    `
  })
};
