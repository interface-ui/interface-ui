<script lang="ts" setup>
import { ref } from 'vue'

const highlightItem = ref(3)
const handleClick = (num: number) => {
  highlightItem.value = num
}
</script>

<template>
  <div style="width: 320px">
    <in-list component="nav">
      <in-list-item :highlight="highlightItem === 0" @click="handleClick(0)">
        Getting Started
      </in-list-item>
      <in-list-item :highlight="highlightItem === 1" @click="handleClick(1)">
        Components
      </in-list-item>
      <in-list-item :highlight="highlightItem === 2" @click="handleClick(2)">
        APIs
      </in-list-item>
      <in-list-item
        :highlight="highlightItem === 3"
        highlight-color="tertiaryContainer"
        @click="handleClick(3)"
      >
        Customization
      </in-list-item>
    </in-list>
  </div>
</template>
