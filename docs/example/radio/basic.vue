<script lang="ts" setup>
import { InRadio } from 'interface-ui'
import { ref } from 'vue'

const picked = ref<string>('apple')
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <in-form-label
        v-model="picked"
        :control="InRadio"
        label="🍎 Apple"
        value="apple"
      />
      <in-form-label
        v-model="picked"
        :control="InRadio"
        label="🍌 Banana"
        value="banana"
      />
      <in-form-label
        v-model="picked"
        :control="InRadio"
        label="🍇 Grape"
        value="grape"
      />
      <in-form-label
        v-model="picked"
        :control="InRadio"
        label="🍊 Orange"
        value="orange"
        disabled
      />
    </div>
  </div>
</template>
