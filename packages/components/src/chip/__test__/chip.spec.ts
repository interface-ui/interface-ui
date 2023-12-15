import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import createTheme from '@interface-ui/theme'
import { toCapitalize } from '@interface-ui/utils'
import { InChip, chipVariants } from '../index'
import type { ChipVariants } from '../src/chip'

describe('InChip', () => {
  it('render correctly', () => {
    const wrapper = mount(InChip as any, {
      slots: { default: 'Chip' },
      global: {
        provide: {
          ThemeContext: createTheme(),
        },
      },
    })
    expect(wrapper.classes()).toContain('in-chip')
    expect(wrapper.text()).toBe('Chip')
  })

  it('variant', () => {
    chipVariants.forEach((item: ChipVariants): void => {
      const wrapper = mount(InChip as any, {
        props: { variant: item },
        slots: { default: toCapitalize(item) },
        global: {
          provide: {
            ThemeContext: createTheme(),
          },
        },
      })
      expect(wrapper.classes()).toContain(`in-chip--${item}`)
    })
  })

  it('variant change', async () => {
    const wrapper = mount(InChip as any, {
      props: { variant: 'filled' },
      slots: { default: 'Change variant' },
      global: {
        provide: {
          ThemeContext: createTheme(),
        },
      },
    })

    expect(wrapper.classes()).toContain('in-chip--filled')
    await wrapper.setProps({ variant: 'outlined' })
    expect(wrapper.classes()).toContain('in-chip--outlined')
  })

  it('component', async () => {
    const wrapper = mount(InChip as any, {
      props: { component: 'div' },
      slots: { default: 'Render div tag' },
      global: {
        provide: {
          ThemeContext: createTheme(),
        },
      },
    })
    expect(wrapper.element.tagName).toBe('DIV')
    await wrapper.setProps({ component: 'span' })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('clickable', () => {
    const wrapper = mount(InChip as any, {
      props: { clickable: true },
      slots: { default: 'Clickable Chip' },
      global: {
        provide: {
          ThemeContext: createTheme(),
        },
      },
    })
    expect(wrapper.classes()).toContain('in-action-area')
  })

  it('deletable', () => {
    const wrapper = mount(InChip as any, {
      props: { deletable: true },
      slots: { default: 'Deletable Chip' },
      global: {
        provide: {
          ThemeContext: createTheme(),
        },
      },
    })
    wrapper.find('.in-chip__button--delete').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('delete')
  })
})
