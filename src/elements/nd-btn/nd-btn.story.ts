import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Btn',

  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'btn-secondary', 'btn-tertiary'],
      description: 'The style variant of the button.',
      table: {
        type: { summary: 'default | btn-secondary | btn-tertiary' }
      }
    },
    size: {
      control: 'select',
      options: ['btn-s', 'btn-l', 'btn-circular'],
      description: 'The size of the button.',
      table: {
        type: { summary: 'btn-s | btn-l | btn-circular' }
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
    size: 'btn-s',
    label: 'Click Me'
  }
};
export default meta;

export const Btn: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <button
        :class="['btn', args.variant, args.size]"
        @click="args.onClick"
      >
        {{ args.label }}
      </button>
    `
  })
};
