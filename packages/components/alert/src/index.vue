<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useNamespace } from '@fusion-ui-vue/utils'
import { useAlert } from '@fusion-ui-vue/hooks'
import { alertProps } from './alert'
const props = defineProps(alertProps)
// const emit = defineEmits(alertEmits)
// const iconComponent = computed(() => TypeComponentsMap[props.severity])
const ns = useNamespace('alert')
const cssClass = useAlert(props, ns)
const visible = ref(true)
const icon = computed(() => props.icon !== 'false')

const handleClick = (): void => {
  // alert('click')
}
</script>

<template>
  <transition name="alert-fade">
    <div v-show="visible" :class="[ns.b(), ns.m(props.variant), cssClass]">
      <div v-if="icon" :class="[ns.m('icon')]">
        <!-- <component :is="iconComponent" /> -->
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
