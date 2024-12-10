import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Switcher',
  tags: ['fixme'],
  argTypes: {
    threshold: {
      control: 'select',
      options: ['phone', 'tablet', 'desktop'],
      description: 'Switch threshold for layout breakpoints.'
    }
  },
  args: {
    threshold: 'phone'
  }
};
export default meta;

export const Switcher: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div :class="['switcher', 'switch-' + args.threshold, 'gap-m']">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>
    `
  })
};
