import type { MessageType } from './types'

export interface LMessageProps {
  type?: MessageType
  message: string
  timeout?: number
  offset?: number
  closeBtn?: boolean
}
