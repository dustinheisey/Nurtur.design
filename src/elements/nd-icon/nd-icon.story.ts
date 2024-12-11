import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Icon',
  tags: ['fixme', 'autodocs']
};
export default meta;

export const Icon: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <nd-icon v-bind="args" />
    `
  })
};
