import { Meta, StoryObj } from '@storybook/vue3';
import NdSelect from './NdSelect.vue';

const meta: Meta<typeof NdSelect> = {
  title: 'Elements/NdSelect',
  component: NdSelect,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdSelect> = {
  render: args => ({
    components: { NdSelect },
    setup() {
      return { args };
    },
    template: `
      <NdSelect v-bind="args">
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 1</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 2</a>
        <a href="#" style="text-decoration: none; background: #d1e7dd; padding: 0.5rem 1rem; border-radius: 0.25rem;">Link 3</a>
      </NdSelect>
    `
  })
};
