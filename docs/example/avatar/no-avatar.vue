<script lang="ts" setup>
import { ref } from 'vue'

const stringToColor = (string: string) => {
  let hash = 0
  let i

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    // eslint-disable-next-line unicorn/number-literal-case
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }

  return color
}

const names = ['HG', '胡歌', '霆锋', 'TF', 'ZQ', '紫琪']
const avatars = ref(
  names.map(name => ({
    props: {
      background: stringToColor(name),
      color: 'white',
    },
    text: name,
  }))
)
</script>

<template>
  <div fscw gap-5>
    <fn-avatar v-for="item in avatars" :key="item.text" v-bind="item.props">
      {{ item.text }}
    </fn-avatar>
  </div>
</template>
