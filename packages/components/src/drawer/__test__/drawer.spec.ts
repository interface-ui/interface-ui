import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import consola from 'consola'
import { FnDrawer } from '../index'
describe('FnDrawer', () => {
  // test('class', () => {
  //   const wrapper = mount(FnDrawer as any)
  //   expect(wrapper.find('.fn-Drawer').classes()).toContain('fn-avatar')
  // })
  it('message basic👌', () => {
    const wrapper = mount(FnDrawer as any, {
      props: {
        visible: true,
        title: 'title',
      },
    })
    consola.info('🤔️')
    expect(wrapper.find('.fn-Drawer').classes()).toContain('fn-avatar')
  })
})
