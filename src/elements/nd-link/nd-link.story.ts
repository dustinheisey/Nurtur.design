import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Link',
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'The URL the link points to.',
      table: {
        type: { summary: 'string' }
      }
    },
    label: {
      control: 'text',
      description: 'The text content of the link.',
      table: {
        type: { summary: 'string' }
      }
    },
    navigation: {
      control: 'boolean'
    },
    size: {
      control: 'select',
      options: ['s', 'm'],
      description: 'The size of the link.',
      table: {
        type: { summary: 's | m' }
      }
    }
  },
  args: {
    href: '#',
    label: 'Click here',
    navigation: false
  }
};
export default meta;

export const DefaultLink: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <a
        :class="['link', args.navigation && 'link-navigation', args.size && 'link-' + args.size]"
        :href="args.href"
      >
        {{ args.label }}
      </a>
    `
  })
};

export const NavigationLink: StoryObj = {
  args: {
    href: '#',
    label: 'Click here',
    navigation: true
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <a
        :class="['link', args.navigation && 'link-navigation', args.size && 'link-' + args.size]"
        :href="args.href"
      >
        {{ args.label }}
      </a>
    `
  })
};

export const SmallLink: StoryObj = {
  args: {
    href: '#',
    label: 'Click here',
    navigation: false,
    size: 's'
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <a
        :class="['link', args.navigation && 'link-navigation', args.size && 'link-' + args.size]"
        :href="args.href"
      >
        {{ args.label }}
      </a>
    `
  })
};

export const MediumLink: StoryObj = {
  args: {
    href: '#',
    label: 'Click here',
    navigation: false,
    size: 'm'
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <a
        :class="['link', args.navigation && 'link-navigation', args.size && 'link-' + args.size]"
        :href="args.href"
      >
        {{ args.label }}
      </a>
    `
  })
};
