<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useNamespace } from '@fusion-ui-vue/utils'
import { useAlert } from '@fusion-ui-vue/hooks'
import { componentSeverityIcon } from '@fusion-ui-vue/constants'
import { alertProps } from './alert'
const props = defineProps(alertProps)
// const emit = defineEmits(alertEmits)
const ns = useNamespace('alert')
const cssClass = useAlert(props, ns)
const visible = ref(true)
const icon = computed(() => {
  if (props.icon === false) {
    return false
  }
  return props.icon ? props.icon : componentSeverityIcon[props.severity]
})

const handleClick = (): void => {
  // alert('click')
}
</script>

<template>
  <transition name="alert-fade">
    <div v-show="visible" :class="[ns.b(), ns.m(props.variant), cssClass]">
      <div v-if="icon" :class="[ns.m('icon')]">
        <fn-icon :icon="icon" />
      </div>
      <div :class="[ns.m('message')]">
        <slot />
      </div>
      <div :class="[ns.m('action')]" @click="handleClick">
        <slot name="action" />
      </div>
    </div>
  </transition>
</template>
