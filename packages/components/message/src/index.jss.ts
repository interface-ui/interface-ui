import { css } from '@fusion-ui-vue/theme'
import type { MessageProps } from './message'

const useCss = (props: MessageProps) => {
  const { position, transition } = props
  const { x, y } = position

  const transform = []
  let positionX
  if (x === 'right') {
    transform.push('translateX(30px)')
    positionX = 'right: 16px;'
  } else if (x === 'left') {
    transform.push('translateX(-30px)')
    positionX = 'left: 16px;'
  } else {
    positionX = 'right: 0;\nleft: 0;\nmargin: 0 auto;'
    if (y === 'bottom') {
      transform.push('translateY(30px)')
    } else {
      transform.push('translateY(-30px)')
    }
  }
  const positionY = y === 'bottom' ? 'bottom: 32px;' : 'top: 32px;'

  const transitionGroupStyle = css`
    ${positionX}
    ${positionY}
    .message-move,
    .message-enter-active,
    .message-leave-active {
      transition: ${transition};
    }
    .message-enter-from,
    .message-leave-to {
      opacity: 0;
      transform: ${transform.join(' ')};
    }
  `

  return transitionGroupStyle
}

export default useCss
