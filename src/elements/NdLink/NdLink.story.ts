import { Meta, StoryObj } from '@storybook/vue3';
import NdLink from './NdLink.vue';

const meta: Meta<typeof NdLink> = {
  title: 'Elements/NdLink',
  component: NdLink,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdLink> = {
  render: args => ({
    components: { NdLink },
    setup() {
      return { args };
    },
    template: `
      <NdLink v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdLink>
    `
  })
};
