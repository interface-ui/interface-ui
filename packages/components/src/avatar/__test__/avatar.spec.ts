import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import createTheme from '@fusion-ui-vue/theme'
import FnAvatar from '../src/index.vue'

describe('FnAvatar', () => {
  it('class', () => {
    const wrapper = mount(FnAvatar as any, {
      slots: { default: 'avatar' },
      global: {
        provide: {
          ThemeContext: createTheme(),
        },
      },
    })
    expect(wrapper.classes()).toContain('fn-avatar')
  })
})
