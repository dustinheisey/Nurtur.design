import type { Meta, StoryObj } from '@storybook/vue3';
import NdBtn from './nd-btn.vue';

const meta: Meta<typeof NdBtn> = {
  title: 'Elements/Btn',
  component: NdBtn,
  tags: ['fixme', 'autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'icon', 'icon-subtle', 'circular'],
      description: 'The style variant of the button.',
      table: {
        type: { summary: 'primary | secondary | tertiary | icon | icon-subtle' }
      }
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
      description: 'The size of the button.',
      table: {
        type: { summary: 's | | m | l' }
      }
    },
    label: {
      control: 'text',
      description: 'The text content of the button.',
      table: {
        type: { summary: 'string' }
      }
    },
    href: {
      control: 'text',
      description: 'The button link text.',
      table: {
        type: { summary: 'string' }
      }
    }
  },
  args: {
    variant: 'primary',
    size: 's',
    label: 'Click Me',
    href: '#'
  }
};
export default meta;

export const Btn: StoryObj<typeof NdBtn> = {
  render: args => ({
    setup() {
      return { args };
    },
    components: { NdBtn },
    template: `<nd-btn v-bind="args">{{ args.label }}</nd-btn>`
  })
};
