import { withInstallFunction } from '../install'
import { closeAll, createMessage, createSubHandler } from './src/message'
import type { Message } from './src/types'
import { messageTypes } from './src/types'
// import './style.scss'

const message = createMessage as Message

for (const type of messageTypes)
  message[type] = createSubHandler(type)

message.closeAll = closeAll
const FnMessage = withInstallFunction(message, '$message')

// export * from './props'
export default FnMessage
export { FnMessage }
