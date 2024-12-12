import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Clip',
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['block-start-start', 'block-start-end', 'block-end-start', 'block-end-end'],
      description: 'Where to clip the element.',
      table: {
        type: {
          summary: 'block-start-start | block-start-end | block-end-start | block-end-end'
        }
      }
    }
  },
  args: {
    position: 'block-start-start'
  }
};
export default meta;

export const BlockStartEndClip: StoryObj = {
  args: {
    position: 'block-start-end'
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <div
        :class="['clip-' + args.position]"
        :style="{
          backgroundColor: '#4CAF50',
          width: '200px',
          height: '200px',
        }"
      ></div>
    `
  })
};

export const BlockEndStartClip: StoryObj = {
  args: {
    position: 'block-end-start'
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <div
        :class="['clip-' + args.position]"
        :style="{
          backgroundColor: '#4CAF50',
          width: '200px',
          height: '200px',
        }"
      ></div>
    `
  })
};

export const BlockEndEndClip: StoryObj = {
  args: {
    position: 'block-end-end'
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <div
        :class="['clip-' + args.position]"
        :style="{
          backgroundColor: '#4CAF50',
          width: '200px',
          height: '200px',
        }"
      ></div>
    `
  })
};

export const BlockStartStartClip: StoryObj = {
  args: {
    position: 'block-start-start'
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <div
        :class="['clip-' + args.position]"
        :style="{
          backgroundColor: '#4CAF50',
          width: '200px',
          height: '200px',
        }"
      ></div>
    `
  })
};
