<script setup lang="ts">
// import { isString } from '@vue/shared'
import type { VNode } from 'vue'
import { computed, onMounted, ref, useSlots } from 'vue'
import { useNamespace } from '../../../utils/useNamespace'
import { avatarGroupProps } from './avatar-group'

const props = defineProps(avatarGroupProps)
const ns = useNamespace('avatar-group')
const defaultSlot = useSlots().default as () => VNode[]
const defaultAll = defaultSlot()

const childrenNum = computed(() => {
  const num = ref(0)
  if (defaultAll.length) {
    defaultAll.forEach((item, index) => {
      if ((item as any).type.name === 'FnAvatar')
        num.value++
    })
  }
  return num.value
})

const displayedAvatars = ref(0)
const renderArr: any = ref([])

const getRenderData = (propMax: string | number, propTotal: string | number) => {
  const max = Number(propMax)
  const total = Number(propTotal)
  if (max !== 0 && total !== 0) {
    if (max >= total) {
      // 😄
      if (total < childrenNum.value) {
        displayedAvatars.value = 0
        defaultAll.forEach((it, idx) => {
          idx < total && renderArr.value.push(it.props)
        })
      }
      else {
        displayedAvatars.value = total - childrenNum.value
        defaultAll.forEach((it, idx) => {
          idx < total && renderArr.value.push(it.props)
        })
      }
    }
    else {
      //  max<total
      if (max === 1 || max === 2) {
        displayedAvatars.value = total - 1
        defaultAll.forEach((it, idx) => {
          idx <= 0 && renderArr.value.push(it.props)
        })
      }
      else if (max >= childrenNum.value) {
        displayedAvatars.value = total - childrenNum.value
        defaultAll.forEach((it, idx) => {
          idx < max && renderArr.value.push(it.props)
        })
      }
      else {
        displayedAvatars.value = total - max + 1
        defaultAll.forEach((it, idx) => {
          (idx < max - 1) && renderArr.value.push(it.props)
        })
      }
    }
  }
  else if (total === 0) {
    if (max >= childrenNum.value) {
      displayedAvatars.value = 0
      defaultAll.forEach((it, idx) => {
        idx <= childrenNum.value && renderArr.value.push(it.props)
      })
    }
    else {
      if (max === 1 || max === 2) {
        displayedAvatars.value = childrenNum.value - 1
        defaultAll.forEach((it, idx) => {
          idx === 0 && renderArr.value.push(it.props)
        })
      }
      else if (max !== 1 && max !== 2) {
        displayedAvatars.value = childrenNum.value - max + 1
        defaultAll.forEach((it, idx) => {
          idx < max - 1 && renderArr.value.push(it.props)
        })
      }
    }
  }
  else if (max === 0) {
    if (total >= childrenNum.value) {
      displayedAvatars.value = total - childrenNum.value
      defaultAll.forEach((it, idx) => {
        idx <= childrenNum.value && renderArr.value.push(it.props)
      })
    }
    else {
      displayedAvatars.value = 0
      defaultAll.forEach((it, idx) => {
        idx <= total && renderArr.value.push(it.props)
      })
    }
  }
}

onMounted(() => {
  getRenderData(props.max, props.total)
})
</script>

<template>
  <div
    :class="[ns.b()]"
  >
    <fnAvatar v-if="displayedAvatars !== 0" type="primary" background="rgb(189, 189, 189)">
      +{{ displayedAvatars }}
    </fnAvatar>

    <template v-for="it in renderArr" :key="it">
      <fnAvatar v-bind="{ ...it }" />
    </template>
  </div>
</template>
