<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref('20')
const value2 = ref('200')
const value3 = ref('300')
</script>

<template>
  <div space-y-2>
    <div fscw gap-10>
      <fn-badge :value="value1" :max="10">
        <FnButton>
          Hello
        </FnButton>
      </fn-badge>
      <fn-badge :value="value2" color="purple" :max="100">
        <FnButton>
          Hello
        </FnButton>
      </fn-badge>
      <fn-badge :value="value3" color="deeppink" :max="200">
        <FnButton>
          Hello
        </FnButton>
      </fn-badge>
    </div>
  </div>
</template>
