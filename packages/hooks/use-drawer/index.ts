import {
  getCurrentInstance,

  onMounted,
  ref,
  watch
} from 'vue'
import type { SetupContext } from 'vue'
import { UPDATE_MODEL_EVENT } from '@fusion-ui/constants'
import type { DrawerEmits } from '@fusion-ui/components/drawer/src/drawer'
export const useDrawer = (
  props: any,
) => {
  const instance = getCurrentInstance()!
  const emit = instance.emit as SetupContext<DrawerEmits>['emit']
  const visible = ref(false)
  function doClose() {
    visible.value = false
    emit(UPDATE_MODEL_EVENT, false)
  }

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        visible.value = true
      }
      else {
        if (visible.value)
          visible.value = false
      }
    },
  )

  onMounted(() => {
    if (props.modelValue)
      visible.value = true
  })

  return {
    doClose,
    visible
  }
}
