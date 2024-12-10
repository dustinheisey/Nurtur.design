import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Radio',
  tags: ['fixme'],

  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the radio button.',
      table: {
        type: { summary: 'string' }
      }
    },
    name: {
      control: 'text',
      description: 'The name attribute for the radio button group.',
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
    variant: {
      control: 'select',
      options: ['default', 'input-card'],
      description: 'The style variant of the radio button.',
      table: {
        type: { summary: 'default | input-card' }
      }
    },
    onChange: {
      action: 'change',
      description: 'Event triggered when the radio button is selected.',
      table: {
        type: { summary: 'function' }
      }
    }
  },
  args: {
    label: 'Option 1',
    name: 'group',
    value: 'option1',
    checked: false,
    variant: 'default'
  }
};
export default meta;

export const Radio: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <label v-if="args.variant === 'default'">
        <input
          type="radio"
          :name="args.name"
          :value="args.value"
          :checked="args.checked"
          @change="args.onChange"
        />
        {{ args.label }}
      </label>
      <label v-else class="input-card">
        <input
          type="radio"
          :name="args.name"
          :value="args.value"
          :checked="args.checked"
          @change="args.onChange"
        />
        <span>
          {{ args.label }}
        </span>
      </label>
    `
  })
};
