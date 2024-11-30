import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/NdButton',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'button-secondary', 'button-tertiary'],
      description: 'The style variant of the button.',
      table: {
        type: { summary: 'default | button-secondary | button-tertiary' }
      }
    },
    size: {
      control: 'select',
      options: ['button-s', 'button-l', 'button-circular'],
      description: 'The size of the button.',
      table: {
        type: { summary: 'button-s | button-l | button-circular' }
      }
    },
    label: {
      control: 'text',
      description: 'The text content of the button.',
      table: {
        type: { summary: 'string' }
      }
    },
    onClick: {
      action: 'clicked',
      description: 'The click event handler.',
      table: {
        type: { summary: 'function' }
      }
    }
  },
  args: {
    variant: 'default',
    size: 'button-s',
    label: 'Click Me'
  }
};
export default meta;

export const Default: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <button
        :class="['button', args.variant, args.size]"
        @click="args.onClick"
      >
        {{ args.label }}
      </button>
    `
  })
};
