import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { FnAlert } from '../index'

describe('FnAlert', () => {
  test('class', () => {
    const wrapper = mount(FnAlert as any)
    expect(wrapper.classes()).toContain('fn-alert')
  })
})
