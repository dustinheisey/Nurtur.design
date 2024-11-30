import { Meta, StoryObj } from '@storybook/vue3';
import NdIcon from './NdIcon.vue';

const meta: Meta<typeof NdIcon> = {
  title: 'Elements/NdIcon',
  component: NdIcon,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdIcon> = {
  render: args => ({
    components: { NdIcon },
    setup() {
      return { args };
    },
    template: `
      <NdIcon v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdIcon>
    `
  })
};
