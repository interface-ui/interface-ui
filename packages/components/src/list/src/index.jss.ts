/* eslint-disable quote-props */
import { computed, ref } from 'vue'
import { css, cx, useColor } from '@fusion-ui-vue/theme'
import { isString } from '@vue/shared'
import type { ComponentStylingHook } from '../../../types'
import type { ListProps } from './list'

const useCss: ComponentStylingHook<ListProps> = props =>
  computed(() => {
    let [$background, $onBackground] = useColor(props, 'background')
    if (isString(props.background) && props.background.startsWith('surface')) {
      // @ts-expect-error: ignore
      $onBackground = ref(
        props.background === 'surface'
          ? $onBackground
          : 'var(--md-sys-color-on-surface-variant)'
      )
    }

    const listStyle = css([
      {
        color: $onBackground.value ?? 'var(--md-sys-color-on-surface)',
        '& .fn-list-item': {
          color: $onBackground.value ?? 'var(--md-sys-color-on-surface)',
        },
      },
      +props.level === 0 && {
        backgroundColor: $background.value ?? 'var(--md-sys-color-surface)',
      },
    ])

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(listStyle, styleFromCs)
  })

export default useCss
