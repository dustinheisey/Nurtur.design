import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Theme',
  argTypes: {
    theme: {
      control: 'select',
      options: [
        'theme-background',
        'theme-dark',
        'theme-surface',
        'theme-surface-inverse',
        'theme-primary',
        'theme-primary-container',
        'theme-secondary',
        'theme-secondary-container',
        'theme-tertiary',
        'theme-tertiary-container',
        'theme-error',
        'theme-error-container'
      ],
      description: 'Theme variant.',
      table: {
        type: {
          summary:
            'theme-background | theme-dark | theme-surface | theme-surface-inverse | theme-primary | theme-secondary | etc.'
        }
      }
    }
  },
  args: {
    theme: 'theme-background'
  }
};
export default meta;

export const Theme: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div :class="[args.theme]" style="padding: 2rem;">
        This is a themed container.
      </div>
    `
  })
};
