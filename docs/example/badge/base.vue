<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref('10')
const value2 = ref('20')
const value3 = ref('30')
</script>

<template>
  <div space-y-2>
    <div fscw gap-10>
      <fn-badge :value="value1">
        <FnButton>
          Hello
        </FnButton>
      </fn-badge>
      <fn-badge :value="value2" color="purple">
        <FnButton>
          Hello
        </FnButton>
      </fn-badge>
      <fn-badge :value="value3" color="deeppink">
        <FnButton>
          Hello
        </FnButton>
      </fn-badge>
    </div>
  </div>
</template>
