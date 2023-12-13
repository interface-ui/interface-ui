import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTheme } from '@fusion-ui-vue/theme'
import CircleProgressBar from '../src/svg/circle.vue'

describe('CircleProgressBar', () => {
  const theme = createTheme()

  it('render correctly', () => {
    const wrapper = mount(CircleProgressBar, {
      props: { status: 'indeterminate' },
      global: {
        provide: {
          ThemeContext: theme,
        },
      },
    })
    expect(wrapper.classes()).toContain('fn-progress__circle')
  })

  it('circle progress status', async () => {
    const wrapper = mount(CircleProgressBar, {
      props: { status: 'indeterminate' },
      global: {
        provide: {
          ThemeContext: theme,
        },
      },
    })

    expect(wrapper.find('.fn-progress--indeterminate').exists()).toBe(true)
    await wrapper.setProps({ status: 'determinate', value: 50 })
    expect(wrapper.find('.fn-progress--determinate').exists()).toBe(true)
  })
})
