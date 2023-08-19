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
  emit('close', evt)
  visible.value = false
}
const box = ref<HTMLElement | null>(null)
</script>

<template>
  <transition name="alert-fade">
    <div v-show="visible" :class="classList" :style="styleList">
      <div class="fn-alert-content">
        <div v-if="$slots.fixedArea" class="fixed-tip">
          <slot name="fixedArea" />
        </div>
        <div class="scroll-area">
          <div :class="isScroll">
            <div
              ref="box" class="box"
              :style="props.center ? 'text-align:center;' : ''"
            >
              <div class="title">
                {{ props.title }}
              </div>
              <div
                v-if="props.description"
                class="description"
                :style="props.title ? 'margin-top:5px' : ''"
              >
                {{ props.description }}
              </div>
            </div>
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
