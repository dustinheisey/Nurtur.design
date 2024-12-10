import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Mosaic',
  argTypes: {
    mosaicTemplate: {
      control: 'text',
      description: 'CSS grid-template-areas for mosaic layout.',
      table: {
        type: { summary: 'String' }
      }
    },
    content: {
      control: 'array',
      description: 'Content for mosaic grid items.',
      table: { type: { summary: 'Array of strings or HTML content.' } }
    }
  },
  args: {
    mosaicTemplate: "'one one two' 'one one three' 'four five six'",
    content: ['Block 1', 'Block 2', 'Block 3', 'Block 4', 'Block 5', 'Block 6']
  }
};
export default meta;

export const Mosaic: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div
        class="mosaic"
        :style="{ '--mosaic': args.mosaicTemplate }"
      >
        <div
          v-for="(item, index) in args.content"
          :key="index"
          style="border: 2px solid var(--color-primary); padding: var(--space-m);"
        >
          {{ item }}
        </div>
      </div>
    `
  })
};
