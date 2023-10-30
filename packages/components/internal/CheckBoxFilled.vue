<script>
import { computed } from 'vue'
import { useTheme } from '@fusion-ui-vue/theme'
export default {
  name: 'CheckBoxFilled',
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: String,
      default: 'inherit',
    },
  },
  setup(props) {
    const {
      typography: { pxToRem },
    } = useTheme().value

    const fontSize = computed(() => {
      const _size = +props.size
      if (isNaN(_size)) {
        const [_, size, unit] = /(d+)(w+)/.exec(props.size) || []
        return unit === 'px' ? pxToRem(+size) : props.size
      } else {
        return pxToRem(_size)
      }
    })

    return {
      fontSize,
      // eslint-disable-next-line vue/no-dupe-keys
      color: props.color,
    }
  },
}
</script>

<template>
  <svg
    class="fn-icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    :style="{ fontSize, color }"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    />
  </svg>
</template>
