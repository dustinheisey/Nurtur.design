import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Tooltip',
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['block-start', 'block-end', 'inline-start', 'inline-end'],
      description: 'The position of the tooltip relative to the parent.',
      table: {
        type: { summary: 'block-start | block-end | inline-start | inline-end' }
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
    position: 'block-start',
    content: 'This is a tooltip.',
    triggerText: 'Hover over me'
  }
};
export default meta;

export const BlockStartTooltip: StoryObj = {
  args: {
    position: 'block-start',
    content: 'This is a tooltip.',
    triggerText: 'Hover over me'
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <div style="position: relative; display: inline-block;">
        <a href="#" class="btn" aria-describedby="tooltip">{{ args.triggerText }}</a>
        <tool-tip :class="['tip-' + args.position]" id="tooltip">{{ args.content }}</tool-tip>
      </div>
    `
  })
};

export const BlockEndTooltip: StoryObj = {
  args: {
    position: 'block-end',
    content: 'This is a tooltip.',
    triggerText: 'Hover over me'
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <div style="position: relative; display: inline-block;">
        <a href="#" class="btn" aria-describedby="tooltip">{{ args.triggerText }}</a>
        <tool-tip :class="['tip-' + args.position]" id="tooltip">{{ args.content }}</tool-tip>
      </div>
    `
  })
};

export const InlineStartTooltip: StoryObj = {
  args: {
    position: 'inline-start',
    content: 'This is a tooltip.',
    triggerText: 'Hover over me'
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <div style="position: relative; display: inline-block;">
        <a href="#" class="btn" aria-describedby="tooltip">{{ args.triggerText }}</a>
        <tool-tip :class="['tip-' + args.position]" id="tooltip">{{ args.content }}</tool-tip>
      </div>
    `
  })
};

export const InlineEndTooltip: StoryObj = {
  args: {
    position: 'inline-end',
    content: 'This is a tooltip.',
    triggerText: 'Hover over me'
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <div style="position: relative; display: inline-block;">
        <a href="#" class="btn" aria-describedby="tooltip">{{ args.triggerText }}</a>
        <tool-tip :class="['tip-' + args.position]" id="tooltip">{{ args.content }}</tool-tip>
      </div>
    `
  })
};
