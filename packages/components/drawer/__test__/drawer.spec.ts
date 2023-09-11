import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { FnDrawer } from '../index'
describe('FnDrawer', () => {
  test('class', () => {
    const wrapper = mount(FnDrawer)
    expect(wrapper.find('.fn-Drawer').classes()).toContain('fn-avatar')
  })
})
