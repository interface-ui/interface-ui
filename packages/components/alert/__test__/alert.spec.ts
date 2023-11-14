import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import createTheme from '@fusion-ui-vue/theme'
import { FnAlert } from '../index'

describe('FnAlert', () => {
  test('class', () => {
    const wrapper = mount(FnAlert as any, {
      global: {
        provide: {
          ThemeContext: createTheme(),
        },
      },
    })
    expect(wrapper.classes()).toContain('fn-alert')
  })
})
