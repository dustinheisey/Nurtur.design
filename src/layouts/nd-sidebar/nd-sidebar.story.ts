import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Sidebar',
  tags: ['fixme'],
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
      <section
        :class="['sidebar', args.variant]"
      >
        <div class="fixed">Fixed</div>
        <div>Flexible</div>
      </section>
    `
  })
};
