import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTheme } from '@interface-ui/theme'
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
    expect(wrapper.classes()).toContain('in-progress__linear')
  })

  it('linear progress status', async () => {
    const wrapper = mount(LinearProgressBar, {
      props: { status: 'indeterminate' },
      global: {
        provide: {
          ThemeContext: theme,
        },
      },
    })

    expect(wrapper.find('.in-progress--indeterminate').exists()).toBe(true)
    await wrapper.setProps({ status: 'determinate' })
    expect(wrapper.find('.in-progress--determinate').exists()).toBe(true)
  })
})
