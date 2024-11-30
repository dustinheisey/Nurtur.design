import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/NdBgPattern',
  tags: ['autodocs'],
  argTypes: {
    pattern: {
      control: 'select',
      options: ['pattern-waves', 'pattern-rain', 'pattern-bubbles', 'pattern-topography'], // Pattern options based on your SCSS file
      description: 'Choose a background pattern for the component.'
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
    <section :class="['theme-primary','bg-pattern', 'justify-center-intrinsic', 'text-center', args.pattern]" style="inline-size: 100%; block-size: 300px;">
      <p>Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur. Mollit aliquip voluptate nostrud qui laboris esse reprehenderit. Proident elit pariatur tempor magna esse non. Eu aliqua nulla officia officia esse proident officia</p>
    </section>
  `
  })
};
