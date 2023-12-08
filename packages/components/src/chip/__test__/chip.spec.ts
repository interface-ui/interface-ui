import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import createTheme from '@fusion-ui-vue/theme'
import { toCapitalize } from '@fusion-ui-vue/utils'
import { FnChip, chipVariants } from '../index'
import type { ChipVariants } from '../src/chip'

describe('FnChip', () => {
  it('render correctly', () => {
    const wrapper = mount(FnChip as any, {
      slots: { default: 'Chip' },
      global: {
        provide: {
          ThemeContext: createTheme(),
        },
      },
    })
    expect(wrapper.classes()).toContain('fn-chip')
    expect(wrapper.text()).toBe('Chip')
  })

  it('variant', () => {
    chipVariants.forEach((item: ChipVariants): void => {
      const wrapper = mount(FnChip as any, {
        props: { variant: item },
        slots: { default: toCapitalize(item) },
        global: {
          provide: {
            ThemeContext: createTheme(),
          },
        },
      })
      expect(wrapper.classes()).toContain(`fn-chip--${item}`)
    })
  })

  it('variant change', async () => {
    const wrapper = mount(FnChip as any, {
      props: { variant: 'filled' },
      slots: { default: 'Change variant' },
      global: {
        provide: {
          ThemeContext: createTheme(),
        },
      },
    })

    expect(wrapper.classes()).toContain('fn-chip--filled')
    await wrapper.setProps({ variant: 'outlined' })
    expect(wrapper.classes()).toContain('fn-chip--outlined')
  })

  it('component', async () => {
    const wrapper = mount(FnChip as any, {
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
    const wrapper = mount(FnChip as any, {
      props: { clickable: true },
      slots: { default: 'Clickable Chip' },
      global: {
        provide: {
          ThemeContext: createTheme(),
        },
      },
    })
    expect(wrapper.classes()).toContain('fn-action-area')
  })

  it('deletable', () => {
    const wrapper = mount(FnChip as any, {
      props: { deletable: true },
      slots: { default: 'Deletable Chip' },
      global: {
        provide: {
          ThemeContext: createTheme(),
        },
      },
    })
    wrapper.find('.fn-chip__button--delete').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('delete')
  })
})
