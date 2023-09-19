import { describe, expect, it, test } from 'vitest'
import { mount } from '@vue/test-utils'
import type { ComponentSize } from '@fusion-ui/constants'
import { componentSizes } from '@fusion-ui/constants'
import { FnButton, buttonShapes, buttonVariants } from '../index'
import type { ButtonShape, ButtonVariant } from '../src/button'

describe('FnButton', () => {
  it('class', () => {
    const wrapper = mount(FnButton as any)
    expect(wrapper.classes()).toContain('fn-button')
  })

  it('variant', () => {
    buttonVariants.forEach((item: ButtonVariant): void => {
      const wrapper = mount(FnButton as any, {
        props: { shape: item },
      })
      expect(wrapper.classes()).toContain(`fn-button--${item}`)
    })
  })

  it('shape', () => {
    buttonShapes.forEach((item: ButtonShape): void => {
      const wrapper = mount(FnButton as any, {
        props: { shape: item },
      })
      expect(wrapper.classes()).toContain(`fn-button--${item}`)
    })
  })

  it('size', () => {
    componentSizes.forEach((item: ComponentSize): void => {
      const wrapper = mount(FnButton as any, {
        props: { size: item },
      })
      expect(wrapper.classes()).toContain(`fn-button--${item}`)
    })
  })

  test('default slot', () => {
    const wrapper = mount(FnButton as any, {
      slots: { default: 'Button' },
    })
    expect(wrapper.text()).toContain('Button')
  })
})
