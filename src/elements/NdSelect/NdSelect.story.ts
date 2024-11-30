import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/NdSelect',
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'The options available in the select dropdown.',
      table: {
        type: { summary: 'Array<{ value: string, label: string }>' }
      }
    },
    value: {
      control: 'text',
      description: 'The currently selected value.',
      table: {
        type: { summary: 'string' }
      }
    },
    variant: {
      control: 'select',
      options: ['default', 'select-underline'],
      description: 'The style variant of the select component.',
      table: {
        type: { summary: 'default | select-underline' }
      }
    },
    onChange: {
      action: 'change',
      description: 'Event triggered when the selected value changes.',
      table: {
        type: { summary: 'function' }
      }
    }
  },
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ],
    value: 'option1',
    variant: 'default'
  }
};
export default meta;

export const Default: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div :class="[args.variant === 'select-underline' ? 'select select-underline' : 'select']">
        <select :value="args.value" @change="args.onChange($event.target.value)">
          <option
            v-for="option in args.options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
        <span class="focus"></span>
      </div>
    `
  })
};
