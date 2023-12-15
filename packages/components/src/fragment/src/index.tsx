import { defineComponent } from 'vue'

export default defineComponent({
  functional: true,
  inheritAttrs: false,
  setup: (_, { slots }) => slots.default,
})
