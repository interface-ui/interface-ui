<script lang="ts" setup>
import { ref } from 'vue'

const highlightItem = ref(3)
const handleClick = (num: number) => {
  highlightItem.value = num
}
</script>

<template>
  <div style="width: 320px">
    <fn-list component="nav">
      <fn-list-item :highlight="highlightItem === 0" @click="handleClick(0)">
        Getting Started
      </fn-list-item>
      <fn-list-item :highlight="highlightItem === 1" @click="handleClick(1)">
        Components
      </fn-list-item>
      <fn-list-item :highlight="highlightItem === 2" @click="handleClick(2)">
        APIs
      </fn-list-item>
      <fn-list-item
        :highlight="highlightItem === 3"
        highlight-color="secondaryContainer"
        @click="handleClick(3)"
      >
        Customization
      </fn-list-item>
    </fn-list>
  </div>
</template>
