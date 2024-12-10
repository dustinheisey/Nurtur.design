import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Clip',
  argTypes: {
    variant: {
      control: 'select',
      options: ['clip', 'clip-block-start-start', 'clip-block-start-end', 'clip-block-end-start', 'clip-block-end-end'],
      description: 'The clipping variant applied to the element.',
      table: {
        type: {
          summary: 'clip | clip-block-start-start | clip-block-start-end | clip-block-end-start | clip-block-end-end'
        }
      }
    },
    color: {
      control: 'color',
      description: 'The background color of the clipped shape.',
      table: {
        type: { summary: 'string' }
      }
    },
    size: {
      control: 'text',
      description: 'The size of the clipped shape (width and height).',
      table: {
        type: { summary: 'string' }
      }
    }
  },
  args: {
    variant: 'clip',
    color: '#4CAF50',
    size: '200px'
  }
};
export default meta;

export const Clip: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div
        :class="args.variant"
        :style="{
          backgroundColor: args.color,
          width: args.size,
          height: args.size,
        }"
      ></div>
    `
  })
};
