<script lang="ts" setup>
import { FnRadio } from 'interface-ui'
import { ref } from 'vue'

const picked = ref<string>('top')
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-form-label
        v-model="picked"
        :control="FnRadio"
        label="Top"
        label-placement="top"
        value="top"
      />
      <fn-form-label
        v-model="picked"
        :control="FnRadio"
        label="Left"
        label-placement="left"
        value="left"
      />
      <fn-form-label
        v-model="picked"
        :control="FnRadio"
        label="Bottom"
        label-placement="bottom"
        value="bottom"
      />
      <fn-form-label
        v-model="picked"
        :control="FnRadio"
        label="Right"
        label-placement="right"
        value="right"
      />
    </div>
  </div>
</template>
