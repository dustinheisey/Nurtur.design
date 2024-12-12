import type { Meta, StoryFn } from '@storybook/vue3';
import { gap, inset, justify, align } from '../layout-types.ts';
const meta: Meta = {
  title: 'Layouts/Stack',
  tags: ['autodocs'],
  argTypes: {
    gap,
    inset,
    justify,
    align
  },
  args: {
    gap: 'gap-m',
    inset: 'inset-m',
    justify: 'justify-center',
    align: 'align-center'
  }
};
export default meta;

const Template: StoryFn = args => ({
  setup() {
    return { args };
  },
  template: `
    <ul :class="['stack', args.gap, args.inset, args.justify, args.align]">
      <li><a href="#" class="link link-navigation">Item 1</a></li>
      <li><a href="#" class="link link-navigation">Item 2</a></li>
      <li><a href="#" class="link link-navigation">Item 3</a></li>
    </ul>
  `
});

export const Stack = Template.bind({});
