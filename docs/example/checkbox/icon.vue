<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref<boolean>(false)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-checkbox v-model="checked" color="#6366f1">
        <template #icon="icon">
          <fn-icon
            v-bind="icon"
            :icon="
              checked
                ? 'material-symbols:star'
                : 'material-symbols:star-outline'
            "
          />
        </template>
      </fn-checkbox>
      <fn-checkbox v-model="checked" color="#f59e0b">
        <template #icon="icon">
          <fn-icon
            v-bind="icon"
            :icon="
              checked
                ? 'material-symbols:bedtime'
                : 'material-symbols:bedtime-outline'
            "
          />
        </template>
      </fn-checkbox>
    </div>
  </div>
</template>
