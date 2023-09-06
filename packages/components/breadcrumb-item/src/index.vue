<script setup lang="ts">
import { getCurrentInstance, inject } from 'vue'
import type { Router } from 'vue-router'
import { breadcrumbKey } from '../../breadcrumb/src/constants'
import { breadcrumbItemProps } from './breadcrumb-item'

const props = defineProps(breadcrumbItemProps)
const instance = getCurrentInstance()!

const breadcrumbContext = inject(breadcrumbKey, undefined)
const router = instance.appContext.config.globalProperties.$router as Router

const handleClick = () => {
  if (!props.to || !router)
    return
  props.replace ? router.replace(props.to) : router.push(props.to)
}
</script>

<template>
  <span class="fn-breadcrumb-item">
    <span ref="link" class="fn-breadcrumb-inner" :class="[props.to ? 'fn-breadcrumb-link' : '']" @click="handleClick">
      <slot />
    </span>
    <span class="fn-breadcrumb-separator">{{ breadcrumbContext?.separator }}</span>
  </span>
</template>
