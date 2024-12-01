import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Cluster',
  argTypes: {
    variant: {
      control: 'select',
      options: ['cluster-inline', 'cluster-inline-header'],
      description: 'The layout style for the cluster.',
      table: {
        type: {
          summary: 'cluster | cluster-inline | cluster-inline-header'
        }
      }
    }
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
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </nav>
    `
  })
};
