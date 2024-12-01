import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Reel',
  argTypes: {
    variant: {
      control: 'select',
      options: ['reel', 'reel no-bar', 'reel justify-center'],
      description: 'Reel layout variant.',
      table: {
        type: {
          summary: 'reel | reel no-bar | reel justify-center'
        }
      }
    },
    content: {
      control: 'array',
      description: 'Content to populate the reel layout.',
      table: { type: { summary: 'Array of strings or HTML content.' } }
    }
  },
  args: {
    variant: 'reel',
    content: ['Card 1', 'Card 2', 'Card 3', 'Card 4']
  }
};
export default meta;

export const Reel: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div :class="[args.variant]" style="padding: 1rem;">
        <div
          v-for="(item, index) in args.content"
          :key="index"
          class="card"
          style="background: var(--color-background-light); padding: 1rem; border: 1px solid var(--color-border);"
        >
          {{ item }}
        </div>
      </div>
    `
  })
};
