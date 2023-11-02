import { computed } from 'vue'
import type { ComponentStylingHook } from '@fusion-ui-vue/hooks/types'
import { css, cx } from '@fusion-ui-vue/theme'
import type { ButtonBaseProps } from './button-base'

const useCss: ComponentStylingHook<ButtonBaseProps> = props =>
  computed(() => {
    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(
      css`
        position: relative;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        text-transform: uppercase !important;
        vertical-align: middle;
        cursor: pointer;
        outline: 0px;
        appearance: none;
        &[disabled] {
          cursor: default;
        }
      `,
      styleFromCs
    )
  })

export default useCss
