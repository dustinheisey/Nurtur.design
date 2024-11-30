import { Meta, StoryObj } from '@storybook/vue3';
import NdThemeToggle from './NdThemeToggle.vue';

const meta: Meta<typeof NdThemeToggle> = {
  title: 'Components/NdThemeToggle',
  component: NdThemeToggle,
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

export const Default: StoryObj<typeof NdThemeToggle> = {
  render: args => ({
    components: { NdThemeToggle },
    setup() {
      return { args };
    },
    template: `
      <NdThemeToggle v-bind="args"></NdThemeToggle>
    `
  })
};
