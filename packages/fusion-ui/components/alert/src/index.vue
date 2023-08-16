<script lang="ts" setup>
import { computed, ref } from 'vue'
import { UseAlert } from '../../_hooks'
import { alertEmits, alertProps } from './alert'
const props = defineProps(alertProps)
const emit = defineEmits(alertEmits)
const { classList, styleList } = UseAlert(props)

const visible = ref(true)

const isScroll = computed(() => (props.scrollable ? 'bar bar-scroll' : 'bar'))

const handClose = (evt: MouseEvent) => {
  visible.value = false
  emit('close', evt)
  visible.value = false
}
</script>

<template>
  <transition name="alert-fade">
    <div v-show="visible" :class="classList" :style="styleList">
      <div class="fn-alert-content">
        <div class="scroll-area">
          <div :class="isScroll">
            <span>{{ props.text }}</span>
            <slot name="textArea" />
          </div>
        </div>
        <div v-if="props.closable" class="close" @click="handClose">
          <fn-icon name="mdi:close" color="#bfc2c8" />
        </div>
        <div class="slots" @click="handClose">
          <slot name="closeArea" />
        </div>
      </div>
    </div>
  </transition>
</template>
