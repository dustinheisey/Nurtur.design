import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Input',

  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field.',
      table: {
        type: { summary: 'string' }
      }
    },
    value: {
      control: 'text',
      description: 'The current value of the input field.',
      table: {
        type: { summary: 'string' }
      }
    },
    variant: {
      control: 'select',
      options: ['default', 'input-underline'],
      description: 'The style variant of the input field.',
      table: {
        type: { summary: 'default | input-underline' }
      }
    },
    onInput: {
      action: 'input',
      description: 'Event triggered when the input value changes.',
      table: {
        type: { summary: 'function' }
      }
    },
    onFocus: {
      action: 'focus',
      description: 'Event triggered when the input gains focus.',
      table: {
        type: { summary: 'function' }
      }
    },
    onBlur: {
      action: 'blur',
      description: 'Event triggered when the input loses focus.',
      table: {
        type: { summary: 'function' }
      }
    }
  },
  args: {
    placeholder: 'Enter text...',
    value: '',
    variant: 'default'
  }
};
export default meta;

export const Input: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <input
        :class="['input', args.variant === 'input-underline' ? 'input-underline' : '']"
        :placeholder="args.placeholder"
        :value="args.value"
        @input="args.onInput"
        @focus="args.onFocus"
        @blur="args.onBlur"
      />
    `
  })
};
