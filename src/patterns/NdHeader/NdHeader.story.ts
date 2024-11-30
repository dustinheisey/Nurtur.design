import { Meta, StoryObj } from '@storybook/vue3';
import NdHeader from './NdHeader.vue';

const meta: Meta<typeof NdHeader> = {
  title: 'Regions/NdHeader',
  component: NdHeader,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdHeader> = {
  render: args => ({
    components: { NdHeader },
    setup() {
      return { args };
    },
    template: `
      <NdHeader v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdHeader>
    `
  })
};
