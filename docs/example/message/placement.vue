<script lang="ts" setup>
import { FnButton, FnMessageClass } from 'fusion-ui-vue'
import { singleton } from '@fusion-ui-vue/utils'

const FnMessageInstances = {
  'left-top': new (singleton(FnMessageClass))({
    severity: 'error',
    placement: { x: 'left', y: 'top' },
  }),
  'left-bottom': new (singleton(FnMessageClass))({
    placement: { x: 'left', y: 'bottom' },
  }),
  'right-top': new (singleton(FnMessageClass))({
    placement: { x: 'right', y: 'top' },
  }),
  'right-bottom': new (singleton(FnMessageClass))({
    placement: { x: 'right', y: 'bottom' },
  }),
  'center-top': new (singleton(FnMessageClass))({
    placement: { x: 'center', y: 'top' },
  }),
  'center-bottom': new (singleton(FnMessageClass))({
    placement: { x: 'center', y: 'bottom' },
  }),
}

const handleClick = (x, y) => {
  const key = `${x}-${y}`
  const messageIns = FnMessageInstances[key]
  messageIns.push({
    content: `The instance's placement is ${x} ${y}`,
  })
}
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-button variant="text" @click="handleClick('left', 'top')">
        left top
      </fn-button>
      <fn-button variant="text" @click="handleClick('right', 'top')">
        right top
      </fn-button>
    </div>
    <div fscw gap-2 flex justify-between>
      <fn-button variant="text" @click="handleClick('center', 'top')">
        center top
      </fn-button>
      <fn-button variant="text" @click="handleClick('center', 'bottom')">
        center bottom
      </fn-button>
    </div>
    <div fscw gap-2 flex justify-between>
      <fn-button variant="text" @click="handleClick('left', 'bottom')">
        left bottom
      </fn-button>

      <fn-button variant="text" @click="handleClick('right', 'bottom')">
        right bottom
      </fn-button>
    </div>
  </div>
</template>
