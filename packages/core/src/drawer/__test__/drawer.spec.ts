import { describe, expect, it, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { componentDirections } from '@interface-ui/constants'
import InDrawer from '../src/index.vue'

describe('InDrawer', () => {
  test('render', () => {
    const wrapper = mount(InDrawer, {
      props: {
        open: true,
      }
    })

    // expect(wrapper.find('div').classes()).toContain('in-drawer')
    expect(wrapper.find('.in-drawer').exists()).toBe(true)
  })

  test('directions', () => {
    componentDirections.forEach((item) => {
      const wrapper = mount(InDrawer, {
        props: {
          open: true,
          placement: item,
        }
      })
      expect(wrapper.find(`.in-drawer--${item}`).exists()).toBe(true)
    })
  })

  it('slots', async () => {
    const wrapper = mount(InDrawer, {
      slots: {
        default: 'hello world',
      },
      props: {
        open: false,
        keepMounted: true,
      },
    })

    expect(wrapper.text()).toContain('hello world')
  })
})
