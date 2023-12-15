import { generateId, isEmpty, singleton } from '@interface-ui/utils'
import type { VNode } from 'vue'
import { mergeProps, render } from 'vue'
import InAlert from '../../alert'
import InTypography from '../../typography'
import Notistack from './notistack.vue'
import type { MessageProps } from './message'
import useCss from './index.jss'

export class InMessageClass {
  private _rendered = false
  private readonly _body: HTMLElement = document.body
  private _notistack: VNode = (<Notistack />)
  private _defaultProps: MessageProps = {
    title: '',
    variant: 'filled',
    severity: 'info',
    icon: true,
    customIcon: undefined,
    action: undefined,
    actionEvent: (node: VNode) => {
      this._removeMessage((node as any).id)
    },
    content: '',
    duration: 2000,
    transition: 'all 0.5s ease',
    placement: {
      x: 'right',
      y: 'top',
    },
  }

  constructor(props: Partial<MessageProps> = {}) {
    this._defaultProps = { ...this._defaultProps, ...props }
    const cssClass = useCss(this._defaultProps)
    this._notistack = <Notistack class={cssClass} />
    this._render()
  }

  private _render() {
    if (!this._rendered) {
      render(this._notistack, this._body)
      this._rendered = true
    }
  }

  push(props: Partial<MessageProps> = {}) {
    this._render()
    this._pushMessage(props)
  }

  private _pushMessage(props: Partial<MessageProps> = {}) {
    const {
      title,
      content,
      customIcon,
      action,
      actionEvent,
      duration,
      placement: _placement,
      transition: _transition,
      ...alertProps
    } = {
      ...this._defaultProps,
      ...props,
    }
    let timer: any = null

    const Alert = InAlert as any
    const Icon = customIcon as any
    const Action = action as any
    const id = generateId()
    const alertVNode = (
      <Alert
        {...alertProps}
        onMouseenter={() => this._handleMouseenter(timer)}
        onMouseleave={() => this._startTimer(alertVNode, duration)}
      >
        {{
          icon: customIcon ? () => <Icon /> : undefined,
          default: () => (
            <>
              {!isEmpty(title) && (
                <InTypography
                  variant="title.medium"
                  component="h1"
                  color="inherit"
                >
                  {title}
                </InTypography>
              )}
              {content}
            </>
          ),
          action: action
            ? (icon: any) => (
                <Action
                  {...mergeProps(icon, (action as any).props)}
                  onClick={() =>
                    actionEvent(alertVNode, this._removeMessage.bind(this))
                  }
                />
              )
            : undefined,
        }}
      </Alert>
    )
    ;(alertVNode as any).id = id
    this._notistack.component?.exposed?.add(alertVNode)

    timer = this._startTimer(alertVNode, duration)
  }

  private _removeMessage(condition: string | number) {
    this._notistack.component?.exposed?.remove(condition)
  }

  private _handleMouseenter = (timer: any) => {
    clearTimeout(timer)
    timer = null
  }

  private _startTimer(alertVNode: VNode, duration: number) {
    return setTimeout(() => {
      this._removeMessage((alertVNode as any).id)
    }, duration)
  }

  info(props: Partial<MessageProps> = {}) {
    this.push({ ...props, severity: 'info' })
  }

  success(props: Partial<MessageProps> = {}) {
    this.push({ ...props, severity: 'success' })
  }

  warning(props: Partial<MessageProps> = {}) {
    this.push({ ...props, severity: 'warning' })
  }

  error(props: Partial<MessageProps> = {}) {
    this.push({ ...props, severity: 'error' })
  }

  removeAll() {
    this._notistack.component?.exposed?.removeAll()
  }

  static install(app: any) {
    app.config.globalProperties.$message = singleton(InMessageClass)
  }
}

export default singleton(InMessageClass)
