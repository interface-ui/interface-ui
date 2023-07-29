import {
  computed,
  getCurrentInstance,
  onMounted,
  ref,
  watch,
} from 'vue'
import type { CSSProperties, Ref, SetupContext } from 'vue'
import { UPDATE_MODEL_EVENT } from '../../../constans/event'
import { addUnit } from '../../../utils/style'
import type { DialogEmits } from './dialog'

export const useDialog = (
  props: any,
  targetRef: Ref<HTMLElement | undefined>,
) => {
  const instance = getCurrentInstance()!
  const emit = instance.emit as SetupContext<DialogEmits>['emit']

  let lastPosition = ''

  const visible = ref(false)

  const overlayDialogStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {}
    const varPrefix = '--fn-dialog' as const
    if (props.fullscreen)
      style[`${varPrefix}-width`] = '100%'
    if (props.width && !props.fullscreen)
      style[`${varPrefix}-width`] = addUnit(props.width)
    if (!props.width && !props.fullscreen)
      style[`${varPrefix}-width`] = '30%'
    if (props.top && !props.fullscreen)
      style[`${varPrefix}-top`] = addUnit(props.top)
    if (!props.top && !props.fullscreen)
      style[`${varPrefix}-top`] = '30vh'
    return style
  })

  function afterEnter() {
    emit('opened')
  }

  function beforeLeave() {
    emit('close')
  }

  //   function open() {
  //     closeTimer?.()
  //     openTimer?.()

  //     if (props.openDelay && props.openDelay > 0)
  //       ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay))

  //     else
  //       doOpen()
  //   }

  function close() {
    doClose()
  }

  function handleClose() {
    function hide(shouldCancel?: boolean) {
      if (shouldCancel)
        return
      visible.value = false
    }

    if (props.beforeClose)
      props.beforeClose(hide)

    else
      close()
  }

  function onModalClick() {
    if (props.closeOnClickModal)
      handleClose()
  }

  function doOpen() {
    visible.value = true
  }

  function doClose() {
    visible.value = false
    emit(UPDATE_MODEL_EVENT, false)
  }

  function onFocusoutPrevented(event: CustomEvent) {
    if (event.detail?.focusReason === 'pointer')
      event.preventDefault()
  }

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        doOpen()
        // nextTick(() => {
        //   emit('open')
        //   if (targetRef.value)
        //     targetRef.value.scrollTop = 0
        // })
      }
      else {
        if (visible.value)
          close()
      }
    },
  )

  watch(
    () => props.fullscreen,
    (val) => {
      if (!targetRef.value)
        return
      if (val) {
        lastPosition = targetRef.value.style.transform
        targetRef.value.style.transform = ''
      }
      else {
        targetRef.value.style.transform = lastPosition
      }
    },
  )

  onMounted(() => {
    if (props.modelValue)
      doOpen()
  })

  return {
    afterEnter,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    onFocusoutPrevented,
    overlayDialogStyle,
    visible,
  }
}
