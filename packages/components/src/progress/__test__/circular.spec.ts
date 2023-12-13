import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTheme } from '@fusion-ui-vue/theme'
import CircularProgressBar from '../src/svg/circular.vue'

describe('CircularProgressBar', () => {
  const theme = createTheme()

  it('render correctly', () => {
    const wrapper = mount(CircularProgressBar, {
      props: { status: 'indeterminate' },
      global: {
        provide: {
          ThemeContext: theme,
        },
      },
    })
    expect(wrapper.classes()).toContain('fn-progress__circular')
  })

  it('circular progress status', async () => {
    const wrapper = mount(CircularProgressBar, {
      props: { status: 'indeterminate' },
      global: {
        provide: {
          ThemeContext: theme,
        },
      },
    })

    expect(wrapper.find('.fn-progress--indeterminate').exists()).toBe(true)
    await wrapper.setProps({ status: 'determinate' })
    expect(wrapper.find('.fn-progress--determinate').exists()).toBe(true)
  })
})
