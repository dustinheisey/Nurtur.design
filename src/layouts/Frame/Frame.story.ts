import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Frame',
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'frame',
        'frame square',
        'frame logo',
        'frame vertical-s',
        'frame vertical',
        'frame photo',
        'frame video',
        'frame full',
        'frame-cover'
      ],
      description: 'The style and aspect ratio of the frame.',
      table: {
        type: {
          summary:
            'frame | frame square | frame logo | frame vertical-s | frame vertical | frame photo | frame video | frame full | frame-cover'
        }
      }
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color for the frame.',
      table: {
        type: { summary: 'CSS color (e.g., #fff, var(--color))' }
      }
    },
    content: {
      control: 'text',
      description: 'Content inside the frame.',
      table: {
        type: { summary: 'string or HTML' }
      }
    }
  },
  args: {
    variant: 'frame',
    backgroundColor: 'var(--color-background-light)',
    content: 'Frame Content'
  }
};
export default meta;

export const Frame: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div
        :class="args.variant"
        :style="{ backgroundColor: args.backgroundColor }"
      >
        <div
          style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;"
          v-html="args.content"
        ></div>
      </div>
    `
  })
};
