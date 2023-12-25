<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<number>(1)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2 flex-col>
      <div>
        <in-radio v-model="value" size="small" :value="1" />
        <in-radio v-model="value" size="small" color="error" :value="2" />
        <in-radio
          v-model="value"
          size="small"
          :color="theme => theme.colors.cyan[400]"
          :value="3"
        />
      </div>
      <div>
        <in-radio v-model="value" :value="1" />
        <in-radio v-model="value" color="error" :value="2" />
        <in-radio
          v-model="value"
          :color="theme => theme.colors.cyan[400]"
          :value="3"
        />
      </div>
      <div>
        <in-radio v-model="value" size="large" :value="1" />
        <in-radio v-model="value" size="large" color="error" :value="2" />
        <in-radio
          v-model="value"
          size="large"
          :color="theme => theme.colors.cyan[400]"
          :value="3"
        />
      </div>
    </div>
  </div>
</template>
