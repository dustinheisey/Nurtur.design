import { Meta, StoryObj } from '@storybook/vue3';
import NdList from './NdList.vue';

const meta: Meta<typeof NdList> = {
  title: 'Layout/NdList',
  component: NdList,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdList> = {
  render: args => ({
    components: { NdList },
    setup() {
      return { args };
    },
    template: `
      <NdList v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdList>
    `
  })
};
