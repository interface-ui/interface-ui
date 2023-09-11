<script lang="ts" setup>
import { ref } from 'vue'

const checkedNames = ref<string[]>([])
</script>

<template>
  <div space-y-2>
    <div>{{ checkedNames }}</div>
    <div fscw gap-2>
      <fn-checkbox id="jack" v-model="checkedNames" value="Jack" />
      <label for="jack">Jack</label>

      <fn-checkbox id="john" v-model="checkedNames" value="John" />
      <label for="john">John</label>

      <fn-checkbox id="mike" v-model="checkedNames" value="Mike" />
      <label for="mike">Mike</label>
    </div>
  </div>
</template>
