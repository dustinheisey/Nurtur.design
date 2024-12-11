import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Input',
  tags: ['autodocs'],

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
    underline: {
      control: 'boolean',
      description: 'Whether to display the underline input variant.'
    }
  },
  args: {
    placeholder: 'Enter text...',
    value: '',
    underline: false
  }
};
export default meta;

export const DefaultInput: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <input
        :class="['input', args.underline && 'input-underline']"
        :placeholder="args.placeholder"
        :value="args.value"
      />
    `
  })
};

export const UnderlineInput: StoryObj = {
  args: {
    placeholder: 'Enter text...',
    value: '',
    underline: true
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <input
        :class="['input', args.underline && 'input-underline']"
        :placeholder="args.placeholder"
        :value="args.value"
      />
    `
  })
};
