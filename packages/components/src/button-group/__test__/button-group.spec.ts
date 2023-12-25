import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import type { ComponentSizes } from '@interface-ui/constants'
import { componentSizes } from '@interface-ui/constants'
import createTheme from '@interface-ui/theme'
import type { ButtonGroupOrientations } from '../index'
import { InButtonGroup, buttonGroupOrientations } from '../index'
import type { ButtonShapes, ButtonVariants } from '../../button'
import { buttonShapes, buttonVariants } from '../../button'

describe('InButtonGroup', () => {
  it('class', () => {
    const wrapper = mount(InButtonGroup as any, {
      global: {
        provide: {
          ThemeContext: createTheme(),
        },
      },
    })
    expect(wrapper.classes()).toContain('in-button-group')
  })

  it('variant', () => {
    buttonVariants.forEach((item: ButtonVariants): void => {
      const wrapper = mount(InButtonGroup as any, {
        props: { shape: item },
        global: {
          provide: {
            ThemeContext: createTheme(),
          },
        },
      })
      expect(wrapper.classes()).toContain(`in-button-group--${item}`)
    })
  })

  it('shape', () => {
    buttonShapes.forEach((item: ButtonShapes): void => {
      const wrapper = mount(InButtonGroup as any, {
        props: { shape: item },
        global: {
          provide: {
            ThemeContext: createTheme(),
          },
        },
      })
      expect(wrapper.classes()).toContain(`in-button-group--${item}`)
    })
  })

  it('size', () => {
    componentSizes.forEach((item: ComponentSizes): void => {
      const wrapper = mount(InButtonGroup as any, {
        props: { size: item },
        global: {
          provide: {
            ThemeContext: createTheme(),
          },
        },
      })
      expect(wrapper.classes()).toContain(`in-button-group--${item}`)
    })
  })

  it('orientation', () => {
    buttonGroupOrientations.forEach((item: ButtonGroupOrientations): void => {
      const wrapper = mount(InButtonGroup as any, {
        props: { orientation: item },
        global: {
          provide: {
            ThemeContext: createTheme(),
          },
        },
      })
      expect(wrapper.classes()).toContain(`in-button-group--${item}`)
    })
  })
})
