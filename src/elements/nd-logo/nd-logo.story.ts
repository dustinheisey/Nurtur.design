import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Logo',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['m', 'l'],
      description: 'The size of the logo.',
      table: {
        type: { summary: 'm | l' }
      }
    },
    src: {
      control: 'text',
      description: 'The source URL for the logo image.',
      table: {
        type: { summary: 'string' }
      }
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the logo.',
      table: {
        type: { summary: 'string' }
      }
    }
  },
  args: {
    size: 'm',
    src: 'https://via.placeholder.com/150',
    alt: 'Company Logo'
  }
};
export default meta;

export const DefaultLogo: StoryObj = {
  args: {
    size: 'm',
    src: 'https://via.placeholder.com/150',
    alt: 'Company Logo'
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <img
        :class="['logo', args.size && 'logo-' + args.size]"
        :src="args.src"
        :alt="args.alt"
      />
    `
  })
};

export const LargeLogo: StoryObj = {
  args: {
    size: 'l',
    src: 'https://via.placeholder.com/150',
    alt: 'Company Logo'
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <img
        :class="['logo-' + args.size]"
        :src="args.src"
        :alt="args.alt"
      />
    `
  })
};
