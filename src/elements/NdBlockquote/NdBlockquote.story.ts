import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/NdBlockquote',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'blockquote-accent'],
      description: 'The style variant of the blockquote.',
      table: {
        type: { summary: 'default | blockquote-accent' }
      }
    },
    content: {
      control: 'text',
      description: 'The text content of the blockquote.',
      table: {
        type: { summary: 'string' }
      }
    },
    citation: {
      control: 'text',
      description: 'The citation text for the blockquote.',
      table: {
        type: { summary: 'string' }
      }
    }
  },
  args: {
    variant: 'default',
    content: 'This is a sample blockquote. It’s styled with an elegant font and accents.',
    citation: '— Someone Famous'
  }
};
export default meta;

export const Default: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <figure>
        <blockquote :class="[args.variant]">{{ args.content }}</blockquote>
        <figcaption>{{ args.citation }}</figcaption>
      </figure>
    `
  })
};
