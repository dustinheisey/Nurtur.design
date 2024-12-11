import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Textarea',
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text'
    },
    value: {
      control: 'text'
    },
    underline: {
      control: 'boolean'
    }
  },
  args: {
    placeholder: 'Enter your text...',
    value: '',
    underline: false
  }
};
export default meta;

export const DefaultTextarea: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <textarea
        :class="[args.underline && 'textarea-underline']"
        :placeholder="args.placeholder"
        :value="args.value"
      ></textarea>
    `
  })
};

export const UnderlineTextarea: StoryObj = {
  args: {
    placeholder: 'Enter your text...',
    value: '',
    underline: true
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <textarea
        :class="[args.underline ? 'textarea-underline' : '']"
        :placeholder="args.placeholder"
        :value="args.value"
      ></textarea>
    `
  })
};
