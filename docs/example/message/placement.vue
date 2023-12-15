<script lang="ts" setup>
import { InButton, InMessageClass } from 'interface-ui'
import { singleton } from '@interface-ui/utils'

const InMessageInstances = {
  'left-top': new (singleton(InMessageClass))({
    severity: 'error',
    placement: { x: 'left', y: 'top' },
  }),
  'left-bottom': new (singleton(InMessageClass))({
    placement: { x: 'left', y: 'bottom' },
  }),
  'right-top': new (singleton(InMessageClass))({
    placement: { x: 'right', y: 'top' },
  }),
  'right-bottom': new (singleton(InMessageClass))({
    placement: { x: 'right', y: 'bottom' },
  }),
  'center-top': new (singleton(InMessageClass))({
    placement: { x: 'center', y: 'top' },
  }),
  'center-bottom': new (singleton(InMessageClass))({
    placement: { x: 'center', y: 'bottom' },
  }),
}

const handleClick = (x, y) => {
  const key = `${x}-${y}`
  const messageIns = InMessageInstances[key]
  messageIns.push({
    content: `The instance's placement is ${x} ${y}`,
  })
}
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <in-button variant="text" @click="handleClick('left', 'top')">
        left top
      </in-button>
      <in-button variant="text" @click="handleClick('right', 'top')">
        right top
      </in-button>
    </div>
    <div fscw gap-2 flex justify-between>
      <in-button variant="text" @click="handleClick('center', 'top')">
        center top
      </in-button>
      <in-button variant="text" @click="handleClick('center', 'bottom')">
        center bottom
      </in-button>
    </div>
    <div fscw gap-2 flex justify-between>
      <in-button variant="text" @click="handleClick('left', 'bottom')">
        left bottom
      </in-button>

      <in-button variant="text" @click="handleClick('right', 'bottom')">
        right bottom
      </in-button>
    </div>
  </div>
</template>
