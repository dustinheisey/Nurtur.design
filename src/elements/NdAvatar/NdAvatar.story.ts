import { Meta, StoryObj } from '@storybook/vue3';
import NdAvatar from './NdAvatar.vue';

const meta: Meta<typeof NdAvatar> = {
  title: 'Elements/NdAvatar',
  component: NdAvatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['s', 'l']
    },
    src: {
      control: 'text'
    },
    alt: {
      control: 'text'
    }
  },
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'Avatar'
  }
};
export default meta;

export const Default: StoryObj<typeof NdAvatar> = {
  render: args => ({
    components: { NdAvatar },
    setup() {
      return { args };
    },
    template: `
      <NdAvatar v-bind="args"></NdAvatar>
    `
  })
};
