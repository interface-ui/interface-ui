<script>
import { computed } from 'vue'
import { useTheme } from '@fusion-ui-vue/theme'
export default {
  name: 'IndeterminateCheckBoxFilled',
  props: {
    size: {
      type: [Number, String],
      default: 'inherit',
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
    }
  },
}
</script>

<template>
  <svg
    class="fn-icon"
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    :style="{
      '--fn-icon-font-size': fontSize,
      '--fn-icon-color': $props.color,
    }"
  >
    <g><rect fill="none" height="24" width="24" /></g>
    <g>
      <g>
        <g>
          <path
            d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M17,13H7v-2h10V13z"
          />
        </g>
      </g>
    </g>
  </svg>
</template>
