<script setup lang="ts">
import { computed, ref, toRefs } from 'vue'
import { Icon } from 'fusion-ui-iconify/dist/dist.mjs'
import { getSvgIncon, inputEmits, inputProps } from '../src/input'
import { useInput } from '../src/use-input'
import { UPDATE_MODEL_EVENT } from '../../../constans/event'
type TargetElement = HTMLInputElement | HTMLTextAreaElement

const props = defineProps(inputProps)

const emit = defineEmits(inputEmits)

const { modelValue, disabled, maxLength, clearable, type, placeholder } = toRefs(props)
const inputRef = ref<HTMLElement>()
const {
  overlayInputStyle,
} = useInput(props, inputRef)

const clear = () => {
  emit(UPDATE_MODEL_EVENT, '')
}
const readonly = computed(() => {
  return disabled.value
})

const showClear = computed(() => {
  return !disabled.value && clearable.value && modelValue.value.toString().length > 0
})
const showEye = computed(() => {
  return type.value === 'password' && modelValue.value.toString().length > 0
})

const inintIcon: any = ref('eye-slash')

const inputType = ref(type.value)

const changeEyeIcon = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
  if (inputType.value === 'password')
    inintIcon.value = 'eye-slash'
  else
    inintIcon.value = 'eye'
}

/**
 * @description: input事件
 * @param {Event} event
 * @return {*}
 * 当 <input> 元素的值发生改变时触发
 */
const handleInput = (event: Event) => {
  const { value } = event.target as TargetElement
  emit(UPDATE_MODEL_EVENT, value)
  emit('input', value)
}
const handleFocus = (event: Event) => {
  const { value } = event.target as TargetElement
  emit('focus', value)
}

/**
 * @description: change事件
 * @param {Event} event
 * @return {*}
 * 当输入框失去焦点或用户按Enter时触发
 */
const handleChange = (event: Event) => {
  const { value } = event.target as TargetElement
  emit('change', value)
}
</script>

<template>
  <div v-if="type === 'text' || type === 'password' || type === 'number' " ref="inputRef" class="fn-input" :style="overlayInputStyle" :class="[disabled && 'input-disabled']">
    <!-- 前部图标 -->
    <span v-if="prefixIcon" class="prefix-icon">
      <Icon :icon="prefixIcon" color="pink" />
    </span>

    <!-- 输入框 -->
    <input
      :value="modelValue"
      :type="inputType"
      :class="[disabled && 'disabled']"
      :placeholder="placeholder"
      :readonly="readonly"
      :maxlength="maxLength"
      @input="handleInput"
      @focus="handleFocus"
      @change="handleChange"
    >
    <!-- 后部图标 -->
    <span v-if="suffixIcon" class="suffix-icon">
      <Icon :icon="suffixIcon" color="#4e80ee" />
    </span>

    <!-- 眼睛图标 -->
    <!-- //@ts-ignore -->
    <i v-if="showEye" class="eye" @click="changeEyeIcon" v-html="getSvgIncon(inintIcon)" />

    <!-- 清除图标 -->
    <span v-show="showClear" class="clear" @click="clear">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </span>
  </div>
  <div v-if="type === 'textarea'" class="fn-textarea" :class="[disabled && 'input-disabled']" :style="overlayInputStyle">
    <textarea
      :value="modelValue"
      :readonly="readonly"
      :placeholder="placeholder"
      :class="[disabled && 'disabled']"
      @input="handleInput"
      @focus="handleFocus"
      @change="handleChange"
    />
  </div>
</template>
