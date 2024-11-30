import { Meta, StoryObj } from '@storybook/vue3';
import NdTooltip from './NdTooltip.vue';

const meta: Meta<typeof NdTooltip> = {
  title: 'Elements/NdTooltip',
  component: NdTooltip,
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
    src: 'https://i.prtooltip.cc/300',
    alt: 'Tooltip'
  }
};
export default meta;

export const Default: StoryObj<typeof NdTooltip> = {
  render: args => ({
    components: { NdTooltip },
    setup() {
      return { args };
    },
    template: `
      <NdTooltip v-bind="args"></NdTooltip>
    `
  })
};
