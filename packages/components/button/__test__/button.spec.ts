import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import type { ComponentSizes } from '@fusion-ui-vue/constants'
import { componentSizes } from '@fusion-ui-vue/constants'
import { FnButton, buttonShapes, buttonVariants } from '../index'
import type { ButtonShapes, ButtonVariants } from '../src/button'

describe('FnButton', () => {
  it('class', () => {
    const wrapper = mount(FnButton as any)
    expect(wrapper.classes()).toContain('fn-button')
  })

  it('variant', () => {
    buttonVariants.forEach((item: ButtonVariants): void => {
      const wrapper = mount(FnButton as any, {
        props: { variant: item },
      })
      expect(wrapper.classes()).toContain(`fn-button--${item}`)
    })
  })

  it('shape', () => {
    buttonShapes.forEach((item: ButtonShapes): void => {
      const wrapper = mount(FnButton as any, {
        props: { shape: item },
      })
      expect(wrapper.classes()).toContain(`fn-button--${item}`)
    })
  })

  it('size', () => {
    componentSizes.forEach((item: ComponentSizes): void => {
      const wrapper = mount(FnButton as any, {
        props: { size: item },
      })
      expect(wrapper.classes()).toContain(`fn-button--${item}`)
    })
  })

  it('default slot', () => {
    const wrapper = mount(FnButton as any, {
      slots: { default: 'Button' },
    })
    expect(wrapper.text()).toContain('Button')
  })
})
