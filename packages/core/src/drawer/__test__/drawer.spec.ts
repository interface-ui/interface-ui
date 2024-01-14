import { describe, expect, it } from 'vitest'
import { createApp, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import consola from 'consola'
import InDrawer from '../src/index.vue'
const app = createApp({})

app.component('InDrawer', InDrawer)
describe('InDrawer', () => {
  it('render test', async () => {
    const wrapper = mount({
      template: '<in-drawer open="true"  />',
    })
    await nextTick()
    console.log('class', wrapper.classes()) // []
    expect(wrapper.find('in-drawer').exists()).toBe(true) // true
  })

  it('InDrawer placement', async () => {
    // const placement = 'top'
    // const wrapper = mount(InDrawer, {
    //   props: {
    //     open: true,
    //     placement,
    //   },
    // })
    const wrapper = mount({
      template: '<in-drawer open="true" >123</in-drawer>',
    })
    await nextTick()
    expect(wrapper.text()).toContain('123')
  })
})
