import { describe, expect, it, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { FnButton } from '../index'
import type { ButtonShape, ButtonSize } from '../src/button'
import type { ComponentState } from '../../type'

describe('FnButton', () => {
  it('class', () => {
    const wrapper = mount(FnButton)
    expect(wrapper.classes()).toContain('fn-button')
  })

  it('disabled', () => {
    const wrapper = mount(FnButton, {
      props: { disabled: true },
    })
    expect(wrapper.classes()).toContain('is-disabled')
  })

  it('state', () => {
    const buttonState = ['info', 'success', 'warning', 'danger'] as const
    buttonState.forEach((item: ComponentState): void => {
      const wrapper = mount(FnButton, {
        props: { state: item },
      })
      expect(wrapper.classes()).toContain(`fn-button--${item}`)
    })
  })

  it('shape', () => {
    const buttonShape = ['round', 'pill', 'circle', 'plain'] as const
    buttonShape.forEach((item: ButtonShape): void => {
      const wrapper = mount(FnButton, {
        props: { shape: item },
      })
      expect(wrapper.classes()).toContain(`fn-button--${item}`)
    })
  })

  it('size', () => {
    const buttonSize = ['mini', 'small', 'medium', 'large'] as const
    buttonSize.forEach((item: ButtonSize): void => {
      const wrapper = mount(FnButton, {
        props: { size: item },
      })
      expect(wrapper.classes()).toContain(`fn-button--${item}`)
    })
  })

  it('color', () => {
    const color = '#fff'
    const wrapper = mount(FnButton, {
      props: { color },
    })
    expect(wrapper.attributes('style')).toContain(`--fn-button-text-color: ${color}`)
  })

  it('background', () => {
    const background = '#fff'
    const wrapper = mount(FnButton, {
      props: { background },
    })
    expect(wrapper.attributes('style')).toContain(`--fn-button-bg-color: ${background}`)
  })

  test('default slot', () => {
    const wrapper = mount(FnButton, {
      slots: { default: 'Success' },
    })
    expect(wrapper.text()).toContain('Success')
  })

  test('on click', async () => {
    const wrapper = mount(FnButton, {
      slots: { default: '点击测试' },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('disabled click', async () => {
    const wrapper = mount(FnButton, {
      slots: { default: '点击测试' },
      props: { disabled: true },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
