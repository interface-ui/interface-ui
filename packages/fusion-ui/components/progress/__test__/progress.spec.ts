import { describe, expect, it, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { FnProgress } from '../index'

describe('FnProgress', () => {
  test('class', async () => {
    const wrapper = mount(FnProgress as any)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.fn-progress').classes()).toContain('fn-progress')
  })

  it('percentage', () => {
    const percentage = 50
    const wrapper = mount(FnProgress as any, {
      props: {
        percentage,
        type: 'line',
      },
    })
    expect(wrapper.find('.fn-progress-text-out').text()).toBe('50%')
    expect(wrapper.find('.fn-progress').attributes('style')).toContain(`--progress-bar-width: ${percentage}`)
  })

  it('height', () => {
    const wrapper = mount(FnProgress as any, {
      props: {
        height: 15,
      },
    })
    expect(wrapper.find('.fn-progress').attributes('style')).toContain('height: 15px')
  })

  it('bar color & background', () => {
    const wrapper = mount(FnProgress as any, {
      props: {
        barColor: 'deeppink',
        background: 'deeppink',
      },
    })
    expect(wrapper.find('.fn-progress').attributes('style')).toContain('--progress-bar-inner-bg: deeppink')
    expect(wrapper.find('.fn-progress').attributes('style')).toContain('--progress-bar-out-bg: deeppink')
  })

  it('intermediate & duration', () => {
    const wrapper = mount(FnProgress as any, {
      props: {
        intermediate: true,
        duration: 2,
      },
    })
    expect(wrapper.find('.fn-progress').attributes('style')).toContain('--bar-duration: 2s')
    expect(wrapper.find('.bar-intermediate').classes()).toContain('bar-intermediate')
  })

  it('striped & striped-flow', () => {
    const wrapper = mount(FnProgress as any, {
      props: {
        striped: true,
        stripedFlow: true,
      },
    })
    expect(wrapper.find('.fn-progress-bar-striped').classes()).toContain('fn-progress-bar-striped')
    expect(wrapper.find('.fn-progress-bar-is-flow').classes()).toContain('fn-progress-bar-is-flow')
  })
})
