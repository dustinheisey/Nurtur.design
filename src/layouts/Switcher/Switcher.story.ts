import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Switcher',
  argTypes: {
    threshold: {
      control: 'text',
      description: 'Switch threshold for layout breakpoints.',
      table: {
        type: { summary: 'CSS value (e.g., 480px, 768px)' }
      }
    },
    gap: {
      control: 'text',
      description: 'Gap between items.',
      table: {
        type: { summary: 'CSS gap value (e.g., var(--space-m), 1rem)' }
      }
    }
  },
  args: {
    threshold: '480px',
    gap: 'var(--space-m)'
  }
};
export default meta;

export const Switcher: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div class="switcher" :style="{ '--threshold': args.threshold, '--gap': args.gap }">
        <div style="background: var(--color-background-light); padding: 1rem;">Item 1</div>
        <div style="background: var(--color-background); padding: 1rem;">Item 2</div>
        <div style="background: var(--color-background-dark); padding: 1rem;">Item 3</div>
      </div>
    `
  })
};
