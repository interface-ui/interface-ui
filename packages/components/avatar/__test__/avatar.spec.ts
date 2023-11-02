import { describe, expect, it, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { FnAvatar } from '../index'
describe('FnAvatar', () => {
  test('class', () => {
    const wrapper = mount(FnAvatar as any)
    expect(wrapper.find('.fn-avatar').classes()).toContain('fn-avatar')
  })

  // it('background', () => {
  //   const background = '#fff'
  //   const wrapper = mount(FnAvatar, {
  //     props: {
  //       size: 'large',
  //       background,
  //     },
  //     slots: { default: 'avatar' },
  //   })
  //   expect(wrapper.attributes('style')).toContain(`--fn-avatar-bgc: ${background}`)
  // })

  it('color', async () => {
    const color = '#fff'
    const wrapper = mount(FnAvatar as any, {
      props: {
        size: 'large',
        color,
      },
      slots: { default: 'avatar' },
    })
    expect(wrapper.attributes('style')).toContain(
      `--fn-avatar-text-color: ${color}`
    )
  })
})
