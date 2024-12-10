import type { Meta, StoryObj } from '@storybook/vue3';
import NdBtn from './nd-btn.vue';

const meta: Meta<typeof NdBtn> = {
  title: 'Elements/Btn',
  component: NdBtn,
  tags: ['fixme'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'btn-secondary', 'btn-tertiary'],
      description: 'The style variant of the button.',
      table: {
        type: { summary: 'default | btn-secondary | btn-tertiary' }
      }
    },
    size: {
      control: 'select',
      options: ['btn-s', 'btn-l', 'btn-circular'],
      description: 'The size of the button.',
      table: {
        type: { summary: 'btn-s | btn-l | btn-circular' }
      }
    },
    label: {
      control: 'text',
      description: 'The text content of the button.',
      table: {
        type: { summary: 'string' }
      }
    },
    onClick: {
      action: 'clicked',
      description: 'The click event handler.',
      table: {
        type: { summary: 'function' }
      }
    }
  },
  args: {
    variant: 'primary',
    size: 's',
    label: 'Click Me'
  }
};
export default meta;

export const Btn: StoryObj<typeof NdBtn> = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <nd-btn :variant="args.variant" :size="args.size" :label="args.label" @click="args.onClick" />
    `
  })
};
