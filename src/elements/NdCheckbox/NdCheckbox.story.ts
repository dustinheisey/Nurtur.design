import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/NdCheckbox',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text for the checkbox.',
      table: {
        type: { summary: 'string' }
      }
    },
    variant: {
      control: 'select',
      options: ['default', 'input-card'],
      description: 'The style variant of the checkbox.',
      table: {
        type: { summary: 'default | input-card' }
      }
    },
    checked: {
      control: 'boolean',
      description: 'Determines whether the checkbox is checked.',
      table: {
        type: { summary: 'boolean' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Determines whether the checkbox is disabled.',
      table: {
        type: { summary: 'boolean' }
      }
    },
    onChange: {
      action: 'changed',
      description: 'Event triggered when the checkbox state changes.',
      table: {
        type: { summary: 'function' }
      }
    }
  },
  args: {
    label: 'Check me',
    variant: 'default',
    checked: false,
    disabled: false
  }
};
export default meta;

export const Default: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <label v-if="args.variant === 'default'" class="checkbox-wrapper">
        <input
          type="checkbox"
          class="checkbox"
          :checked="args.checked"
          :disabled="args.disabled"
          @change="args.onChange"
        />
        {{ args.label }}
      </label>
      <div v-else class="input-card">
        <input
          type="checkbox"
          :checked="args.checked"
          :disabled="args.disabled"
          id="checkbox-input-card"
          @change="args.onChange"
        />
        <span>
          <svg v-if="args.checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M9 16.2l-4.2-4.2-1.4 1.4L9 19 21 7l-1.4-1.4z"
            />
          </svg>
          {{ args.label }}
        </span>
      </div>
    `
  })
};
