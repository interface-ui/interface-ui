import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { FnAlert } from '../index'
describe('FnAlert', () => {
  test('class', async () => {
    const wrapper = mount(FnAlert)
    expect(wrapper.find('.fn-alert').classes()).toContain('fn-alert')
  })
})
