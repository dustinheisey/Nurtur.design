import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Center',
  tags: ['fixme'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['start', 'center', 'end', 'start-intrinsic', 'center-intrinsic', 'end-intrinsic'],
      description: 'Justify alignment variant.',
      table: {
        type: {
          summary: 'start | center | end | start-intrinsic | center-intrinsic | end-intrinsic'
        }
      }
    },
    content: {
      control: 'text',
      description: 'Content to justify within the layout.',
      table: { type: { summary: 'string or HTML content' } }
    }
  },
  args: {
    variant: 'center',
    content: 'Justified Content'
  }
};
export default meta;

export const Center: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div
        :class="[args.variant]"
        style="background: var(--color-background-light); padding: 1rem; border: 1px solid var(--color-border);"
      >
        {{ args.content }}
      </div>
    `
  })
};
