import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Elements/Select',
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
    underline: {
      control: 'boolean'
    }
  },
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ],
    value: 'option1',
    underline: false
  }
};
export default meta;

export const DefaultSelect: StoryObj = {
  render: args => ({
    setup() {
      return { args };
    },
    template: `
      <div :class="['select', args.underline && 'select-underline']">
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

export const UnderlineSelect: StoryObj = {
  args: {
    options: [
      {
        value: 'option1',
        label: 'Option 1'
      },
      {
        value: 'option2',
        label: 'Option 2'
      },
      {
        value: 'option3',
        label: 'Option 3'
      }
    ],

    value: 'option1',
    underline: true
  },

  render: args => ({
    setup() {
      return { args };
    },

    template: `
      <div :class="['select', args.underline && 'select-underline']">
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
