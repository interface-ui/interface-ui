import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import createTheme from '@interface-ui/theme'
import InAvatar from '../src/index.vue'

describe('InAvatar', () => {
  it('class', () => {
    const wrapper = mount(InAvatar as any, {
      slots: { default: 'avatar' },
      global: {
        provide: {
          ThemeContext: createTheme(),
        },
      },
    })
    expect(wrapper.classes()).toContain('in-avatar')
  })
})
