import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Avatar',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
      description: 'The size of the avatar.',
      table: {
        type: { summary: 's | m | l' }
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
    alt: 'Avatar',
    size: 'm'
  }
};
export default meta;

export const DefaultAvatar: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
        <img :class="['avatar']" :src="args.src" :alt="args.alt" />
    `
  })
};

export const SmallAvatar: StoryObj = {
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'Avatar',
    size: 's'
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
        <img :class="['avatar', 'avatar-' +args.size ]" :src="args.src" :alt="args.alt" />
    `
  })
};

export const MediumAvatar: StoryObj = {
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'Avatar',
    size: 'm'
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
        <img :class="['avatar', 'avatar-' +args.size ]" :src="args.src" :alt="args.alt" />
    `
  })
};

export const LargeAvatar: StoryObj = {
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'Avatar',
    size: 'l'
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
        <img :class="['avatar', 'avatar-' +args.size ]" :src="args.src" :alt="args.alt" />
    `
  })
};
