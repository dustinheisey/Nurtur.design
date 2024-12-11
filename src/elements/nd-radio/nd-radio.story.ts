import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Radio',
  tags: ['autodocs'],

  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the radio button.',
      table: {
        type: { summary: 'string' }
      }
    },
    value: {
      control: 'text',
      description: 'The value attribute for the radio button.',
      table: {
        type: { summary: 'string' }
      }
    },
    checked: {
      control: 'boolean',
      description: 'Whether the radio button is selected.',
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
    label: 'Option 1',
    value: 'option1',
    checked: false,
    disabled: false
  }
};
export default meta;

export const DefaultRadio: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <label class="radio">
        <input
          type="radio"
          :value="args.value"
          :checked="args.checked"
          :disabled="args.disabled"
        />
        {{ args.label }}
      </label>
    `
  })
};

export const DisabledRadio: StoryObj = {
  args: {
    label: 'Option 1',
    value: 'option1',
    checked: false,
    disabled: true
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <label class="radio">
        <input
          type="radio"
          :value="args.value"
          :checked="args.checked"
          :disabled="args.disabled"
        />
        {{ args.label }}
      </label>
    `
  })
};

export const CheckedRadio: StoryObj = {
  args: {
    label: 'Option 1',
    value: 'option1',
    checked: true,
    disabled: false
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <label class="radio">
        <input
          type="radio"
          :value="args.value"
          :checked="args.checked"
          :disabled="args.disabled"
        />
        {{ args.label }}
      </label>
    `
  })
};
