import type { Meta, StoryObj } from '@storybook/vue3';
import NdCard from './nd-card.vue';

const meta: Meta<typeof NdCard> = {
  title: 'Components/NdCard',
  component: NdCard,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdCard> = {
  render: args => ({
    components: { NdCard },
    setup() {
      return { args };
    },
    template: `
      <NdCard v-bind="args"></NdCard>
    `
  })
};
