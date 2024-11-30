import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/NdJustify',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'justify-start',
        'justify-center',
        'justify-end',
        'justify-start-intrinsic',
        'justify-center-intrinsic',
        'justify-end-intrinsic'
      ],
      description: 'Justify alignment variant.',
      table: {
        type: {
          summary:
            'justify-start | justify-center | justify-end | justify-start-intrinsic | justify-center-intrinsic | justify-end-intrinsic'
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
    variant: 'justify-center',
    content: 'Justified Content'
  }
};
export default meta;

export const Default: StoryObj = {
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
