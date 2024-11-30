import { Meta, StoryObj } from '@storybook/vue3';
import NdCheckbox from './NdCheckbox.vue';

const meta: Meta<typeof NdCheckbox> = {
  title: 'Elements/NdCheckbox',
  component: NdCheckbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    card: { control: 'boolean' }
  },
  args: {
    label: 'Checkbox Label',
    card: false
  }
};
export default meta;

export const Default: StoryObj<typeof NdCheckbox> = {
  render: args => ({
    components: { NdCheckbox },
    setup() {
      return { args };
    },
    template: `
      <NdCheckbox v-bind="args" />
    `
  })
};
