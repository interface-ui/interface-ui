import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTheme } from '@fusion-ui-vue/theme'
import LinearProgressBar from '../src/svg/linear.vue'

describe('CircleProgressBar', () => {
  const theme = createTheme()

  it('render correctly', () => {
    const wrapper = mount(LinearProgressBar, {
      props: { status: 'indeterminate' },
      global: {
        provide: {
          ThemeContext: theme,
        },
      },
    })
    expect(wrapper.classes()).toContain('fn-progress__linear')
  })

  it('circle progress status', async () => {
    const wrapper = mount(LinearProgressBar, {
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
