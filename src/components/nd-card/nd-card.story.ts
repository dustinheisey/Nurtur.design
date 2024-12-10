import type { Meta, StoryObj } from '@storybook/vue3';
import NdCard from './nd-card.vue';

const meta: Meta<typeof NdCard> = {
  title: 'Components/NdCard',
  tags: ['fixme'],
  component: NdCard
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
