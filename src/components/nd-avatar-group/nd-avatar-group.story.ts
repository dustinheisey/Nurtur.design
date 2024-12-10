import type { Meta, StoryObj } from '@storybook/vue3';
import NdAvatarGroup from './nd-avatar-group.vue';

const meta: Meta<typeof NdAvatarGroup> = {
  title: 'Components/NdAvatarGroup',
  component: NdAvatarGroup,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof NdAvatarGroup> = {
  render: args => ({
    components: { NdAvatarGroup },
    setup() {
      return { args };
    },
    template: `
      <NdAvatarGroup v-bind="args">
        <img class="avatar" src="https://i.pravatar.cc/300" alt="Avatar 1" />
        <img class="avatar" src="https://i.pravatar.cc/300" alt="Avatar 2" />
        <img class="avatar" src="https://i.pravatar.cc/300" alt="Avatar 3" />
        <img class="avatar" src="https://i.pravatar.cc/300" alt="Avatar 4" />
        <img class="avatar" src="https://i.pravatar.cc/300" alt="Avatar 5" />
      </NdAvatarGroup>
    `
  })
};
