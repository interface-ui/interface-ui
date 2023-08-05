import type { MessageType } from './types'

export interface LMessageProps {
  type?: MessageType
  message: string
  duration?: number
  offset?: number
  closeBtn?: boolean
  showIcon?: boolean
}
