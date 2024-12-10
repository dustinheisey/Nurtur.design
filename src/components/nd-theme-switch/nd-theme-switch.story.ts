import type { Meta, StoryObj } from '@storybook/vue3';
import NdThemeSwitch from './nd-theme-switch.vue';

const meta: Meta<typeof NdThemeSwitch> = {
  title: 'Components/NdThemeSwitch',
  component: NdThemeSwitch,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdThemeSwitch> = {
  render: args => ({
    components: { NdThemeSwitch },
    setup() {
      return { args };
    },
    template: `
      <NdThemeSwitch v-bind="args"></NdThemeSwitch>
    `
  })
};
