import { Meta, StoryObj } from '@storybook/vue3';
import NdBadge from './NdBadge.vue';

const meta: Meta<typeof NdBadge> = {
  title: 'Elements/NdBadge',
  component: NdBadge,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'boolean'
    },
    size: {
      control: 'select',
      options: ['l']
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary']
    }
  },
  args: {
    variant: 'primary'
  }
};
export default meta;

export const Default: StoryObj<typeof NdBadge> = {
  render: args => ({
    components: { NdBadge },
    setup() {
      return { args };
    },
    template: `
      <NdBadge v-bind="args">
        123
      </NdBadge>
    `
  })
};
