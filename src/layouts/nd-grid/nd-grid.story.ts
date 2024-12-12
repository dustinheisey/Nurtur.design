import type { Meta, StoryFn } from '@storybook/vue3';

const meta: Meta = {
  title: 'Layouts/Grid',
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: ['grid-2', 'grid-3', 'grid-4', 'grid-5', 'grid-6'],
      description: 'How many columns to display.',
      table: {
        type: {
          summary: 'grid-2 | grid-3 | grid-4 | grid-5 | grid-6'
        }
      }
    }
  },
  args: {
    columns: 'grid-2'
  }
};
export default meta;

const Template: StoryFn = args => ({
  setup() {
    return { args };
  },
  template: `
      <div
        :class="['grid', args.columns]"
      >
        <p class="theme-primary inset-s text-center">Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur.</p>
        <p class="theme-primary-container inset-s text-center">Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur.</p>
        <p class="theme-secondary inset-s text-center">Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur.</p>
        <p class="theme-secondary-container inset-s text-center">Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur.</p>
        <p class="theme-tertiary inset-s text-center">Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur.</p>
        <p class="theme-tertiary-container inset-s text-center">Cupidatat sunt deserunt pariatur cillum irure non id fugiat enim est dolore ex pariatur excepteur.</p>
      </div>
    `
});

export const TwoColumnGrid = Template.bind({});
TwoColumnGrid.args = {
  columns: 'grid-2'
};

export const ThreeColumnGrid = Template.bind({});
ThreeColumnGrid.args = {
  columns: 'grid-3'
};

export const FourColumnGrid = Template.bind({});
FourColumnGrid.args = {
  columns: 'grid-4'
};

export const FiveColumnGrid = Template.bind({});
FiveColumnGrid.args = {
  columns: 'grid-5'
};

export const SixColumnGrid = Template.bind({});
SixColumnGrid.args = {
  columns: 'grid-6'
};
