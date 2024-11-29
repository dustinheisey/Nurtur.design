import { Meta, StoryObj } from '@storybook/vue3';
import NdMosaic from './NdMosaic.vue';
import { argTypes } from '../layout-types.ts';

const meta: Meta<typeof NdMosaic> = {
  title: 'Layout/NdMosaic',
  component: NdMosaic,
  tags: ['autodocs'],
  argTypes: argTypes
};
export default meta;

export const Default: StoryObj<typeof NdMosaic> = {
  render: args => ({
    components: { NdMosaic },
    setup() {
      return { args };
    },
    template: `
      <NdMosaic v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdMosaic>
    `
  })
};
