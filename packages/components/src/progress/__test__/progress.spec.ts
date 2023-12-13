import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTheme } from '@fusion-ui-vue/theme'
import { FnProgress } from '../index'

describe('FnProgress', () => {
  const theme = createTheme()

  it('render correctly', () => {
    const wrapper = mount(FnProgress as any, {
      global: {
        provide: {
          ThemeContext: theme,
        },
      },
    })
    expect(wrapper.classes()).toContain('fn-progress')
  })

  it('circle progress', async () => {
    const wrapper = mount(FnProgress as any, {
      props: { variant: 'circle', status: 'indeterminate' },
      global: {
        provide: {
          ThemeContext: theme,
        },
      },
    })

    expect(wrapper.find('.fn-progress__circle').exists()).toBe(true)
    expect(wrapper.find('.fn-progress--indeterminate').exists()).toBe(true)
    await wrapper.setProps({ status: 'determinate' })
    expect(wrapper.find('.fn-progress--determinate').exists()).toBe(true)
  })

  it('linear progress', async () => {
    const wrapper = mount(FnProgress as any, {
      props: { variant: 'linear', status: 'indeterminate' },
      global: {
        provide: {
          ThemeContext: theme,
        },
      },
    })

    expect(wrapper.find('.fn-progress__linear').exists()).toBe(true)
    expect(wrapper.find('.fn-progress--indeterminate').exists()).toBe(true)
    await wrapper.setProps({ status: 'determinate' })
    expect(wrapper.find('.fn-progress--determinate').exists()).toBe(true)
  })
})
