import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Masonry',
  tags: ['fixme'],
  argTypes: {
    col: {
      control: 'select',
      options: ['col-2', 'col-3'],
      description: 'Masonry layout columns.',
      table: {
        type: {
          summary: 'col-2 | col-3'
        }
      }
    }
  },
  args: {
    col: 'col-2'
  }
};
export default meta;

export const Masonry: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div :class="['masonry', args.col]">
        <p>Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur. Mollit aliquip voluptate nostrud qui laboris esse reprehenderit. Proident elit pariatur tempor magna esse non. Eu aliqua nulla officia officia esse proident officia</p>
        <p>Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur. Proident elit pariatur tempor mag. Proident elit pariatur tempor mag. Proident elit pariatur tempor mag. Mollit aliquip voluptate nostrud qui laboris esse reprehenderit. Proident elit pariatur tempor magna esse non. Eu aliqua nulla officia officia esse proident officia</p>
        <p>Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur. Mollit aliquip voluptate nostrud qui laboris esse reprehenderit. Proident elit pariatur tempor magna esse non. Eu aliqua nulla officia officia ess. Proident elit pariatur tempor mag. Proident elit pariatur tempor mag. Proident elit pariatur tempor mag. Proident elit pariatur tempor mage proident officia</p>
        <p>Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur. Proident elit pariatur tempor mag. Proident elit pariatur tempor mag. Proident elit pariatur tempor mag. Mollit aliquip voluptate nostrud qui laboris esse reprehenderit. Proident elit pariatur tempor magna esse non. Eu aliqua nulla officia officia esse proident officia</p>
        <p>Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepte. Proident elit pariatur tempor magur. Mollit aliquip voluptate nostrud qui laboris esse reprehenderit. Proident elit pariatur tempor magna esse non. Eu aliqua nulla officia officia esse proident officia</p>
      </div>
    `
  })
};
