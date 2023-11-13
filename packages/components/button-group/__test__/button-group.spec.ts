import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import type { ComponentSizes } from '@fusion-ui-vue/constants'
import { componentSizes } from '@fusion-ui-vue/constants'
import type { ButtonGroupOrientation } from '../index'
import { FnButtonGroup, buttonGroupOrientation } from '../index'
import type { ButtonShapes, ButtonVariants } from '../../button'
import { buttonShapes, buttonVariants } from '../../button'

describe('FnButtonGroup', () => {
  it('class', () => {
    const wrapper = mount(FnButtonGroup as any)
    expect(wrapper.classes()).toContain('fn-button-group')
  })

  it('variant', () => {
    buttonVariants.forEach((item: ButtonVariants): void => {
      const wrapper = mount(FnButtonGroup as any, {
        props: { shape: item },
      })
      expect(wrapper.classes()).toContain(`fn-button-group--${item}`)
    })
  })

  it('shape', () => {
    buttonShapes.forEach((item: ButtonShapes): void => {
      const wrapper = mount(FnButtonGroup as any, {
        props: { shape: item },
      })
      expect(wrapper.classes()).toContain(`fn-button-group--${item}`)
    })
  })

  it('size', () => {
    componentSizes.forEach((item: ComponentSizes): void => {
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
