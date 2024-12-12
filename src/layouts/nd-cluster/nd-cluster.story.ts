import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Cluster',
  tags: ['autodocs'],
  argTypes: {
    noWrap: {
      control: 'boolean',
      description: 'Whether to disable cluster item wrapping.',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    }
  },
  args: {
    noWrap: false
  }
};
export default meta;

export const Cluster: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <nav :class="['cluster', args.variant]">
        <a href="#" class="link link-navigation">Link 1</a>
        <a href="#" class="link link-navigation">Link 2</a>
        <a href="#" class="link link-navigation">Link 3</a>
      </nav>
    `
  })
};
