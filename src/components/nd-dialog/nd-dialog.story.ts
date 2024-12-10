import type { Meta, StoryObj } from '@storybook/vue3';
import NdDialog from './nd-dialog.vue';

const meta: Meta<typeof NdDialog> = {
  title: 'Components/NdDialog',
  tags: ['fixme'],
  component: NdDialog
};
export default meta;

export const Default: StoryObj<typeof NdDialog> = {
  render: args => ({
    components: { NdDialog },
    setup() {
      return { args };
    },
    template: `
      <NdDialog v-bind="args"></NdDialog>
    `
  })
};
