import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import FnAvatar from '../src/index.vue'

describe('FnAvatar', () => {
  it('class', () => {
    const wrapper = mount(FnAvatar as any, {
      slots: { default: 'avatar' },
    })
    expect(wrapper.classes()).toContain('fn-avatar')
  })
})
