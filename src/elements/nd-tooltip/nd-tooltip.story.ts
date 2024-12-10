import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Tooltip',
  tags: ['fixme'],
  argTypes: {
    position: {
      control: 'select',
      options: ['tip-block-start', 'tip-block-end', 'tip-inline-start', 'tip-inline-end'],
      description: 'The position of the tooltip relative to the parent.',
      table: {
        type: { summary: 'tip-block-start | tip-block-end | tip-inline-start | tip-inline-end' }
      }
    },
    content: {
      control: 'text',
      description: 'The text content displayed in the tooltip.',
      table: {
        type: { summary: 'string' }
      }
    },
    triggerText: {
      control: 'text',
      description: 'The text of the element triggering the tooltip.',
      table: {
        type: { summary: 'string' }
      }
    }
  },
  args: {
    position: 'tip-block-start',
    content: 'This is a tooltip.',
    triggerText: 'Hover over me'
  }
};
export default meta;

export const Tooltip: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div style="position: relative; display: inline-block;">
        <a href="#" class="btn" aria-describedby="tooltip">{{ args.triggerText }}</a>
        <tool-tip :class="args.position" id="tooltip">{{ args.content }}</tool-tip>
      </div>
    `
  })
};
