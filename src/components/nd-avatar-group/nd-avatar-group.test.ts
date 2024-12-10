import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import NdAvatarGroup from './nd-avatar-group.vue';

describe('NdAvatarGroup', () => {
  it('should render children correctly', () => {
    const wrapper = mount(NdAvatarGroup, {
      slots: {
        default: `
          <img class="avatar" src="avatar1.png" alt="Avatar 1" />
          <img class="avatar" src="avatar2.png" alt="Avatar 2" />
        `
      }
    });

    const children = wrapper.findAll('.avatar');
    expect(children).toHaveLength(2);

    children.forEach(child => {
      expect(child.element.tagName).toBe('IMG');
      expect(child.classes()).toContain('avatar');
    });
  });

  it('should render no children without slot content', () => {
    const wrapper = mount(NdAvatarGroup);
    expect(wrapper.findAll('.avatar')).toHaveLength(0);
  });
});
