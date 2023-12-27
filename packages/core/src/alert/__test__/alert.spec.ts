import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import createTheme from '@interface-ui/theme'
import { InAlert } from '../index'

describe('InAlert', () => {
  test('class', () => {
    const wrapper = mount(InAlert as any, {
      global: {
        provide: {
          ThemeContext: createTheme(),
        },
      },
    })
    expect(wrapper.classes()).toContain('in-alert')
  })
})
