import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Link',
  tags: ['fixme'],

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
    variant: {
      control: 'select',
      options: ['link', 'link-navigation', 'link-navigation link-s'],
      description: 'The style variant of the link.',
      table: {
        type: { summary: 'link | link-navigation | link-navigation link-s' }
      }
    }
  },
  args: {
    href: '#',
    label: 'Click here',
    variant: 'link'
  }
};
export default meta;

export const Link: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <a
        :class="[args.variant]"
        :href="args.href"
      >
        {{ args.label }}
      </a>
    `
  })
};
