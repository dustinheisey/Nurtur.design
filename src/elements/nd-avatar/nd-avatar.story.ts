import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Avatar',
  tags: ['fixme'],
  argTypes: {
    size: {
      control: 'select',
      options: ['avatar-s', 'avatar-l'],
      description: 'The size of the avatar.',
      table: {
        type: { summary: 'avatar-s | avatar-l' }
      }
    },
    src: {
      control: 'text',
      description: 'The source URL of the avatar image.',
      table: {
        type: { summary: 'string' }
      }
    },
    alt: {
      control: 'text',
      description: 'The alternative text for the avatar.',
      table: {
        type: { summary: 'string' }
      }
    }
  },
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'Avatar'
  }
};
export default meta;

export const Avatar: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
        <img :class="['avatar', args.size]" :src="args.src" :alt="args.alt" />
    `
  })
};
