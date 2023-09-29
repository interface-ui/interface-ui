import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import type { ComponentSize } from '@fusion-ui/constants'
import { componentSizes } from '@fusion-ui/constants'
import type { ButtonGroupOrientation } from '../index'
import { FnButtonGroup, buttonGroupOrientation } from '../index'
import type { ButtonShape, ButtonVariant } from '../../button'
import { buttonShapes, buttonVariants } from '../../button'

describe('FnButtonGroup', () => {
  it('class', () => {
    const wrapper = mount(FnButtonGroup as any)
    expect(wrapper.classes()).toContain('fn-button-group')
  })

  it('variant', () => {
    buttonVariants.forEach((item: ButtonVariant): void => {
      const wrapper = mount(FnButtonGroup as any, {
        props: { shape: item },
      })
      expect(wrapper.classes()).toContain(`fn-button-group--${item}`)
    })
  })

  it('shape', () => {
    buttonShapes.forEach((item: ButtonShape): void => {
      const wrapper = mount(FnButtonGroup as any, {
        props: { shape: item },
      })
      expect(wrapper.classes()).toContain(`fn-button-group--${item}`)
    })
  })

  it('size', () => {
    componentSizes.forEach((item: ComponentSize): void => {
      const wrapper = mount(FnButtonGroup as any, {
        props: { size: item },
      })
      expect(wrapper.classes()).toContain(`fn-button-group--${item}`)
    })
  })

  it('orientation', () => {
    buttonGroupOrientation.forEach((item: ButtonGroupOrientation): void => {
      const wrapper = mount(FnButtonGroup as any, {
        props: { orientation: item },
      })
      expect(wrapper.classes()).toContain(`fn-button-group--${item}`)
    })
  })
})
