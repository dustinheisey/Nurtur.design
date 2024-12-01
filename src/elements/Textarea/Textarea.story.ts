import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Textarea',

  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the textarea.',
      table: {
        type: { summary: 'string' }
      }
    },
    value: {
      control: 'text',
      description: 'The current value of the textarea.',
      table: {
        type: { summary: 'string' }
      }
    },
    variant: {
      control: 'select',
      options: ['default', 'textarea-underline'],
      description: 'The style variant of the textarea.',
      table: {
        type: { summary: 'default | textarea-underline' }
      }
    },
    onInput: {
      action: 'input',
      description: 'Event triggered when the value changes.',
      table: {
        type: { summary: 'function' }
      }
    }
  },
  args: {
    placeholder: 'Enter your text...',
    value: '',
    variant: 'default'
  }
};
export default meta;

export const Textarea: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <textarea
        :class="[args.variant === 'textarea-underline' ? 'textarea-underline' : '']"
        :placeholder="args.placeholder"
        :value="args.value"
        @input="args.onInput($event.target.value)"
      ></textarea>
    `
  })
};
