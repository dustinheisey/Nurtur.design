import { Meta, StoryObj } from '@storybook/vue3';
import { layoutArgs } from '../layout-types.ts';

const meta: Meta = {
  title: 'Layouts/BgGradient',
  argTypes: {
    height: {
      control: 'text',
      description: 'Height of the gradient container.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    text: {
      control: 'text',
      description: 'Text content to overlay on the gradient background.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    ...layoutArgs
  },
  args: {
    height: '200px',
    text: 'This is a gradient background example.'
  }
};
export default meta;

export const BgGradient: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <section :class="['theme-primary','bg-gradient', 'center-intrinsic', 'text-center', 'inset-l']">
        <p>Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur. Mollit aliquip voluptate nostrud qui laboris esse reprehenderit. Proident elit pariatur tempor magna esse non. Eu aliqua nulla officia officia esse proident officia</p>
      </section>
    `
  })
};
