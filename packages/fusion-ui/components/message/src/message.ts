import { h, render, shallowReactive } from 'vue'
import type { MessageInstance, MessageType } from './types'
import Message from './index.vue'
import type { LMessageProps } from './props'

const instances: MessageInstance[] = shallowReactive([])
let currId = 1

export function createMessage(props: LMessageProps) {
  const el = document.createElement('div')
  const id = `lucky-message-${currId}`

  const vnode = h(
    Message,
    {
      ...props,
      id,
      onDestroy: () => {
        // 移除DOM
        removeMessageById(id)
        render(null, el)
      },
    },
    () => props.message,
  )
  render(vnode, el)
  document.body.appendChild(el.firstElementChild!)

  const instance: MessageInstance = {
    id,
    vnode,
    component: vnode.component!,
    props,
    close: () => {
      vnode.component!.exposed!.visible.value = false
    },
  }
  instances.push(instance)
  currId++

  return instance
}

export function removeMessage(instance: MessageInstance) {
  const index = instances.indexOf(instance)
  if (index === -1)
    return
  instances.splice(index, 1)
  instance.close()
}

export function removeMessageById(id: string) {
  const index = instances.findIndex(item => item.id === id)
  if (index === -1)
    return
  instances[index].close()
  instances.splice(index, 1)
}

export const getLastOffset = (id: string): number => {
  const index = instances.findIndex(item => item.id === id)
  const target = instances[index - 1]

  if (!target)
    return 0
  return target.component.exposed!.bottom.value
}

export function createSubHandler(type: MessageType) {
  return function (message: any, options: LMessageProps) {
    return createMessage({
      ...options,
      type,
      message,
    })
  }
}

export function closeAll() {
  for (const instance of instances) instance.close()

  instances.splice(0, instances.length)
}
