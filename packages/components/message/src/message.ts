import { h, render, shallowReactive } from 'vue'
import type { MessageInstance, MessageType } from './types'
import Message from './index.vue'
import type { LMessageProps } from './props'

const instances: MessageInstance[] = shallowReactive([])
let currId = 1

export function createMessage(props: LMessageProps) {
  const el = document.createElement('div')
  const id = `fn-message-${currId}`

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

export const svgIncon = new Map([
  ['success', `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
</svg>`],
  ['warning', `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
</svg>`],
  ['danger', `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`],
  ['info', `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>`],
])

export function getSvgIncon(type: MessageType) {
  return svgIncon.get(type)
}
