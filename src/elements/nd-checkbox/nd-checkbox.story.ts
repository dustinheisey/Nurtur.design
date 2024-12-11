import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Checkbox',
  tags: ['autodocs'],

  argTypes: {
    label: {
      control: 'text',
      description: 'The label text for the checkbox.',
      table: {
        type: { summary: 'string' }
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
    }
  },
  args: {
    label: 'Check me',
    checked: false,
    disabled: false
  }
};
export default meta;

export const DefaultCheckbox: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <label class="checkbox">
        <input
          type="checkbox"
          :checked="args.checked"
          :disabled="args.disabled"
        />
        {{ args.label }}
      </label>
    `
  })
};

export const CheckedCheckbox: StoryObj = {
  args: {
    label: 'Check me',
    checked: true,
    disabled: false
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <label class="checkbox">
        <input
          type="checkbox"
          :checked="args.checked"
          :disabled="args.disabled"
        />
        {{ args.label }}
      </label>
    `
  })
};

export const DisabledCheckbox: StoryObj = {
  args: {
    label: 'Check me',
    checked: false,
    disabled: true
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <label class="checkbox">
        <input
          type="checkbox"
          :checked="args.checked"
          :disabled="args.disabled"
        />
        {{ args.label }}
      </label>
    `
  })
};
