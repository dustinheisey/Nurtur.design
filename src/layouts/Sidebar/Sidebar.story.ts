import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Sidebar',
  argTypes: {
    variant: {
      control: 'select',
      options: ['sidebar-split-s', 'sidebar-split', 'sidebar-equal'],
      description: 'Sidebar layout variant.',
      table: {
        type: {
          summary: 'sidebar-split-s | sidebar-split | sidebar-equal'
        }
      }
    }
  },
  args: {
    variant: 'sidebar'
  }
};
export default meta;

export const Sidebar: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div
        :class="['sidebar', args.variant]"
      >
        <div class="fixed" style="background: var(--color-background-light); padding: 1rem;">Fixed</div>
        <div style="background: var(--color-background); padding: 1rem;">Flexible</div>
      </div>
    `
  })
};
