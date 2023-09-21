<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref<boolean>(false)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-checkbox v-model="checked" color="#6366f1" #default="icon">
        <fn-icon
          v-bind="icon"
          :icon="
            checked ? 'material-symbols:star' : 'material-symbols:star-outline'
          "
        />
      </fn-checkbox>
      <fn-checkbox v-model="checked" color="#f59e0b" #default="icon">
        <fn-icon
          v-bind="icon"
          :icon="
            checked
              ? 'material-symbols:bedtime'
              : 'material-symbols:bedtime-outline'
          "
        />
      </fn-checkbox>
    </div>
  </div>
</template>
