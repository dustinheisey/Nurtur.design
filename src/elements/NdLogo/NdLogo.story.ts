import { Meta, StoryObj } from '@storybook/vue3';
import NdLogo from './NdLogo.vue';

const meta: Meta<typeof NdLogo> = {
  title: 'Elements/NdLogo',
  component: NdLogo,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    size: {
      control: 'select',
      options: ['l']
    }
  },
  args: {
    src: 'https://i.prlogo.cc/300',
    alt: 'Logo'
  }
};
export default meta;

export const Default: StoryObj<typeof NdLogo> = {
  render: args => ({
    components: { NdLogo },
    setup() {
      return { args };
    },
    template: `
      <NdLogo v-bind="args" />
    `
  })
};
