import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/NdLogo',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['logo', 'logo-l'],
      description: 'The size of the logo.',
      table: {
        type: { summary: 'logo | logo-l' }
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
    size: 'logo',
    src: 'https://via.placeholder.com/150',
    alt: 'Company Logo'
  }
};
export default meta;

export const Default: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <img
        :class="[args.size]"
        :src="args.src"
        :alt="args.alt"
      />
    `
  })
};
