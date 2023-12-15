import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTheme } from '@interface-ui/theme'
import { InProgress } from '../index'

describe('InProgress', () => {
  const theme = createTheme()

  it('render correctly', () => {
    const wrapper = mount(InProgress as any, {
      global: {
        provide: {
          ThemeContext: theme,
        },
      },
    })
    expect(wrapper.classes()).toContain('in-progress')
  })

  it('circle progress', async () => {
    const wrapper = mount(InProgress as any, {
      props: { variant: 'circle', status: 'indeterminate' },
      global: {
        provide: {
          ThemeContext: theme,
        },
      },
    })

    expect(wrapper.find('.in-progress__circle').exists()).toBe(true)
    expect(wrapper.find('.in-progress--indeterminate').exists()).toBe(true)
    await wrapper.setProps({ status: 'determinate' })
    expect(wrapper.find('.in-progress--determinate').exists()).toBe(true)
  })

  it('linear progress', async () => {
    const wrapper = mount(InProgress as any, {
      props: { variant: 'linear', status: 'indeterminate' },
      global: {
        provide: {
          ThemeContext: theme,
        },
      },
    })

    expect(wrapper.find('.in-progress__linear').exists()).toBe(true)
    expect(wrapper.find('.in-progress--indeterminate').exists()).toBe(true)
    await wrapper.setProps({ status: 'determinate' })
    expect(wrapper.find('.in-progress--determinate').exists()).toBe(true)
  })
})
