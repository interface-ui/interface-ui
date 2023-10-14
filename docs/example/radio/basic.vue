<script lang="ts" setup>
import { FnRadio } from 'fusion-ui-vue'
import { ref } from 'vue'

const picked = ref<string>('apple')
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-form-label
        v-model="picked"
        :control="FnRadio"
        label="🍎 Apple"
        value="apple"
      />
      <fn-form-label
        v-model="picked"
        :control="FnRadio"
        label="🍌 Banana"
        value="banana"
      />
      <fn-form-label
        v-model="picked"
        :control="FnRadio"
        label="🍇 Grape"
        value="grape"
      />
      <fn-form-label
        v-model="picked"
        :control="FnRadio"
        label="🍊 Orange"
        value="orange"
        disabled
      />
    </div>
  </div>
</template>
