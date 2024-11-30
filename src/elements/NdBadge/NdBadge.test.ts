import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import NdBadge from './NdBadge.vue';

describe('Badge.vue', () => {
  it('renders the default badge class', () => {
    const wrapper = mount(NdBadge);
    expect(wrapper.classes()).toContain('badge');
  });

  it('applies the correct variant class', () => {
    const wrapperPrimary = mount(NdBadge, {
      props: { variant: 'primary' }
    });
    expect(wrapperPrimary.classes()).toContain('badge-primary');

    const wrapperSecondary = mount(NdBadge, {
      props: { variant: 'secondary' }
    });
    expect(wrapperSecondary.classes()).toContain('badge-secondary');

    const wrapperTertiary = mount(NdBadge, {
      props: { variant: 'tertiary' }
    });
    expect(wrapperTertiary.classes()).toContain('badge-tertiary');
  });

  it('applies the correct size class', () => {
    const wrapperLarge = mount(NdBadge, {
      props: { size: 'l' }
    });
    expect(wrapperLarge.classes()).toContain('badge-l');
  });

  it('adds the status class when `status` prop is true', () => {
    const wrapper = mount(NdBadge, {
      props: { status: true }
    });
    expect(wrapper.classes()).toContain('status');
  });

  it('does not add the status class when `status` prop is false', () => {
    const wrapper = mount(NdBadge, {
      props: { status: false }
    });
    expect(wrapper.classes()).not.toContain('status');
  });

  it('renders slot content correctly', () => {
    const wrapper = mount(NdBadge, {
      slots: {
        default: 'Badge Content'
      }
    });
    expect(wrapper.text()).toBe('Badge Content');
  });

  it('applies multiple classes correctly', () => {
    const wrapper = mount(NdBadge, {
      props: {
        variant: 'secondary',
        size: 'l',
        status: true
      }
    });
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['badge', 'badge-secondary', 'badge-l', 'status']));
  });

  it('does not add extra or undefined classes', () => {
    const wrapper = mount(NdBadge, {
      props: {
        variant: undefined,
        size: undefined,
        status: false
      }
    });
    expect(wrapper.classes()).toEqual(['badge']);
  });
});
