import { Meta, StoryObj } from '@storybook/vue3';
import NdButton from './NdButton.vue';

const meta: Meta<typeof NdButton> = {
  title: 'Elements/NdButton',
  component: NdButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['s', 'l']
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary']
    },
    circular: {
      control: 'boolean'
    }
  }
};
export default meta;

export const Default: StoryObj<typeof NdButton> = {
  render: args => ({
    components: { NdButton },
    setup() {
      return { args };
    },
    template: `
      <NdButton v-bind="args">
        Button Text
      </NdButton>
    `
  })
};
