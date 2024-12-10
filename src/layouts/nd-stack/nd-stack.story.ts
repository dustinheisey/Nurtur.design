import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Stack',
  argTypes: {}
};
export default meta;

export const Stack: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div class="stack" :style="{ '--gap': args.gap }">
        <p>Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur. Mollit aliquip voluptate nostrud qui laboris esse reprehenderit. Proident elit pariatur tempor magna esse non. Eu aliqua nulla officia officia esse proident officia</p>
        <p>Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur. Mollit aliquip voluptate nostrud qui laboris esse reprehenderit. Proident elit pariatur tempor magna esse non. Eu aliqua nulla officia officia esse proident officia</p>
        <p>Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur. Mollit aliquip voluptate nostrud qui laboris esse reprehenderit. Proident elit pariatur tempor magna esse non. Eu aliqua nulla officia officia esse proident officia</p>
      </div>
    `
  })
};
