import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Cover',
  argTypes: {
    variant: {
      control: 'select',
      options: ['cover', 'cover-s', 'cover sidebar'],
      description: 'The layout style for the cover.',
      table: {
        type: { summary: 'cover | cover-s | cover sidebar' }
      }
    },
    gap: {
      control: 'text',
      description: 'The gap between elements inside the cover layout.',
      table: {
        type: { summary: 'CSS length (e.g., 1rem, 8px)' }
      }
    },
    inset: {
      control: 'text',
      description: 'Padding inset for the container.',
      table: {
        type: { summary: 'CSS length (e.g., var(--inset-page))' }
      }
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color for the cover layout.',
      table: {
        type: { summary: 'string' }
      }
    },
    minBlockSize: {
      control: 'text',
      description: 'Minimum block size for the layout.',
      table: {
        type: { summary: 'CSS length (e.g., 100vh, 75vh)' }
      }
    }
  },
  args: {
    variant: 'cover',
    gap: 'var(--gap-region)',
    inset: 'var(--inset-page)',
    backgroundColor: '#f5f5f5',
    minBlockSize: '100vh'
  }
};
export default meta;

export const Cover: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div
        :class="args.variant"
        :style="{
          gap: args.gap,
          padding: args.inset,
          backgroundColor: args.backgroundColor,
          minBlockSize: args.minBlockSize,
        }"
      >
        <header style="background-color: #4CAF50; padding: 1em; text-align: center; color: white;">Header</header>
        <div class="main" style="background-color: #FF9800; padding: 2em; text-align: center; color: white;">Main Content</div>
        <footer style="background-color: #2196F3; padding: 1em; text-align: center; color: white;">Footer</footer>
      </div>
    `
  })
};
