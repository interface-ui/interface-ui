import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import consola from 'consola'
import { InDrawer } from '../index'
describe('InDrawer', () => {
  // test('class', () => {
  //   const wrapper = mount(InDrawer as any)
  //   expect(wrapper.find('.in-Drawer').classes()).toContain('in-avatar')
  // })
  it('message basic👌', () => {
    const wrapper = mount(InDrawer as any, {
      props: {
        visible: true,
        title: 'title',
      },
    })
    consola.info('🤔️')
    expect(wrapper.find('.in-Drawer').classes()).toContain('in-avatar')
  })
})
