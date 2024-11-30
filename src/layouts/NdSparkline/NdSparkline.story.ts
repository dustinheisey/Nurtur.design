import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/NdSparkline',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['sparkline-inline', 'sparkline-inline-staggered', 'sparkline-block-staggered'],
      description: 'Sparkline layout variant.',
      table: {
        type: {
          summary: 'sparkline-inline | sparkline-inline-staggered | sparkline-block-staggered'
        }
      }
    }
  }
};
export default meta;

export const Default: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div :class="['sparkline', args.variant]">
        <span class="line"></span>
        <p>Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur. Mollit aliquip voluptate nostrud qui laboris esse reprehenderit. Proident elit pariatur tempor magna esse non. Eu aliqua nulla officia officia esse proident officia</p>
        <span class="line"></span>
        <p>Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur. Mollit aliquip voluptate nostrud qui laboris esse reprehenderit. Proident elit pariatur tempor magna esse non. Eu aliqua nulla officia officia esse proident officia</p>
        <span class="line"></span>
        <p>Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur. Mollit aliquip voluptate nostrud qui laboris esse reprehenderit. Proident elit pariatur tempor magna esse non. Eu aliqua nulla officia officia esse proident officia</p>
      </div>
    `
  })
};
