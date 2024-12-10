import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Badge',
  tags: ['fixme'],

  argTypes: {
    status: {
      control: 'boolean'
    },
    size: {
      control: 'select',
      options: ['l']
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary']
    },
    label: { control: 'text' }
  },
  args: {
    variant: 'primary',
    label: '123'
  }
};
export default meta;

export const Badge: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <span :class="['badge', 'badge-' + args.variant, 'badge-' + args.size, { status: args.status }]">
        {{ args.label }}
      </span>
    `
  })
};
