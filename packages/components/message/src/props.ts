import type { MessageType } from './types'

export interface LMessageProps {
  severity?: MessageType
  message: string
  duration?: number
  offset?: number
  closeBtn?: boolean
  showIcon?: boolean
}
