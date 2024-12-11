import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Badge',
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'boolean'
    },
    size: {
      control: 'select',
      options: ['m', 'l']
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary']
    },
    label: { control: 'text' }
  },
  args: {
    variant: 'primary',
    size: 'm',
    label: '123'
  }
};
export default meta;

export const DefaultBadge: StoryObj = {
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

export const PrimaryBadge: StoryObj = {
  args: {
    variant: 'primary',
    size: 'm',
    label: '123'
  },

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

export const SecondaryBadge: StoryObj = {
  args: {
    variant: 'secondary',
    size: 'm',
    label: '123'
  },

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

export const TertiaryBadge: StoryObj = {
  args: {
    variant: 'tertiary',
    size: 'm',
    label: '123'
  },

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

export const LargeBadge: StoryObj = {
  args: {
    variant: 'primary',
    size: 'l',
    label: '123'
  },

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

export const StatusBadge: StoryObj = {
  args: {
    variant: 'primary',
    size: 'm',
    label: '123',
    status: true
  },

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
