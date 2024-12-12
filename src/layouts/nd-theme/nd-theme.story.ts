import type { Meta, StoryFn } from '@storybook/vue3';
import { inset } from '../layout-types';

const meta: Meta = {
  title: 'Layouts/Theme',
  tags: ['autodocs'],
  argTypes: {
    inset,
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
            'background | dark | surface | surface-inverse | primary | primary-container | secondary | secondary-container | tertiary | tertiary-container | error | error-container'
        }
      }
    }
  },
  args: {
    theme: 'theme-background',
    inset: 'inset-xl'
  }
};
export default meta;

const Template: StoryFn = args => ({
  setup() {
    return { args };
  },
  template: `
    <div :class="[args.theme, args.inset]"><h1>Heading Text</h1>
      <p>Commodo sit amet aute laboris est aliqua sunt dolor. Labore ipsum laboris fugiat nostrud. Culpa ut deserunt consequat in in in veniam consectetur aliqua qui. Sint culpa aute et elit.</p>
    </div>
  `
});

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  theme: 'theme-background'
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  theme: 'theme-dark'
};

export const SurfaceTheme = Template.bind({});
SurfaceTheme.args = {
  theme: 'theme-surface'
};

export const SurfaceInverseTheme = Template.bind({});
SurfaceInverseTheme.args = {
  theme: 'theme-surface-inverse'
};

export const PrimaryTheme = Template.bind({});
PrimaryTheme.args = {
  theme: 'theme-primary'
};

export const PrimaryContainerTheme = Template.bind({});
PrimaryContainerTheme.args = {
  theme: 'theme-primary-container'
};

export const SecondaryTheme = Template.bind({});
SecondaryTheme.args = {
  theme: 'theme-secondary'
};

export const SecondaryContainerTheme = Template.bind({});
SecondaryContainerTheme.args = {
  theme: 'theme-secondary-container'
};

export const TertiaryTheme = Template.bind({});
TertiaryTheme.args = {
  theme: 'theme-tertiary'
};

export const TertiaryContainerTheme = Template.bind({});
TertiaryContainerTheme.args = {
  theme: 'theme-tertiary-container'
};

export const ErrorTheme = Template.bind({});
ErrorTheme.args = {
  theme: 'theme-error'
};

export const ErrorContainerTheme = Template.bind({});
ErrorContainerTheme.args = {
  theme: 'theme-error-container'
};
