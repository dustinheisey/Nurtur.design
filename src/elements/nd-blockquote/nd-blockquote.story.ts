import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Blockquote',
  tags: ['autodocs'],
  argTypes: {
    accent: {
      control: 'boolean'
    },
    content: {
      control: 'text'
    },
    citation: {
      control: 'text'
    }
  },
  args: {
    accent: false,
    content: 'This is a sample blockquote. It’s styled with an elegant font and accents.',
    citation: '— Someone Famous'
  }
};
export default meta;

export const DefaultBlockquote: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <figure>
        <blockquote :class="[args.accent && 'blockquote-accent']">{{ args.content }}</blockquote>
        <figcaption>{{ args.citation }}</figcaption>
      </figure>
    `
  })
};

export const AccentBlockquote: StoryObj = {
  args: {
    accent: true,
    content: 'This is a sample blockquote. It’s styled with an elegant font and accents.',
    citation: '— Someone Famous'
  },
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <figure>
        <blockquote :class="[args.accent && 'blockquote-accent']">{{ args.content }}</blockquote>
        <figcaption>{{ args.citation }}</figcaption>
      </figure>
    `
  })
};
