import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import type { ComponentSizes } from '@interface-ui/constants'
import { componentSizes } from '@interface-ui/constants'
import createTheme from '@interface-ui/theme'
import { InButton, buttonShapes, buttonVariants } from '../index'
import type { ButtonShapes, ButtonVariants } from '../src/button'

describe('InButton', () => {
  it('class', () => {
    const wrapper = mount(InButton as any, {
      slots: { default: 'Button' },
      global: {
        provide: {
          ThemeContext: createTheme(),
        },
      },
    })
    expect(wrapper.classes()).toContain('in-button')
  })

  it('variant', () => {
    buttonVariants.forEach((item: ButtonVariants): void => {
      const wrapper = mount(InButton as any, {
        props: { variant: item },
        slots: { default: 'Button' },
        global: {
          provide: {
            ThemeContext: createTheme(),
          },
        },
      })
      expect(wrapper.classes()).toContain(`in-button--${item}`)
    })
  })

  it('shape', () => {
    buttonShapes.forEach((item: ButtonShapes): void => {
      const wrapper = mount(InButton as any, {
        props: { shape: item },
        slots: { default: 'Button' },
        global: {
          provide: {
            ThemeContext: createTheme(),
          },
        },
      })
      expect(wrapper.classes()).toContain(`in-button--${item}`)
    })
  })

  it('size', () => {
    componentSizes.forEach((item: ComponentSizes): void => {
      const wrapper = mount(InButton as any, {
        props: { size: item },
        slots: { default: 'Button' },
        global: {
          provide: {
            ThemeContext: createTheme(),
          },
        },
      })
      expect(wrapper.classes()).toContain(`in-button--${item}`)
    })
  })

  it('default slot', () => {
    const wrapper = mount(InButton as any, {
      slots: { default: 'Button' },
      global: {
        provide: {
          ThemeContext: createTheme(),
        },
      },
    })
    expect(wrapper.text()).toContain('Button')
  })
})
