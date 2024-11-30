import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/NdIcon',
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: ['about', 'advocate', 'blog', 'branding'],
      description: 'The name of the icon to display.',
      table: {
        type: { summary: 'string' }
      }
    },
    size: {
      control: 'select',
      options: ['icon-s', 'icon', 'icon-l', 'icon-xl'],
      description: 'The size of the icon.',
      table: {
        type: { summary: 'icon-s | icon | icon-l | icon-xl' }
      }
    },
    variant: {
      control: 'select',
      options: ['icon-primary', 'icon-secondary', 'icon-tertiary'],
      description: 'The color variant of the icon.',
      table: {
        type: { summary: 'icon-primary | icon-secondary | icon-tertiary' }
      }
    }
  },
  args: {
    icon: 'about',
    size: 'icon',
    variant: 'icon-primary'
  }
};
export default meta;

export const Default: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <svg
        :class="['icon', args.size, args.variant]"
        aria-hidden="true"
      >
        <use :href="'./icons/' + args.icon + '.svg'"></use>
      </svg>
    `
  })
};
