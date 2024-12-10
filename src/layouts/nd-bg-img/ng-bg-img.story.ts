import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/BgImg',
  argTypes: {
    imageUrl: {
      control: 'text',
      description: 'URL of the background image.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    overlayContent: {
      control: 'text',
      description: 'Content to overlay on the background image.',
      table: {
        type: {
          summary: 'string or HTML content'
        }
      }
    },
    height: {
      control: 'text',
      description: 'Height of the background container.',
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  },
  args: {
    imageUrl: 'https://via.placeholder.com/800x400',
    overlayContent: '<h2 style="color: white; text-align: center;">Overlay Content</h2>',
    height: '300px'
  }
};
export default meta;

export const BgImg: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div
        class="bg-img"
        :style="{ height: args.height, position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-l)' }"
      >
        <img :src="args.imageUrl" alt="Background" />
        <div
          v-html="args.overlayContent"
          style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;"
        ></div>
      </div>
    `
  })
};
