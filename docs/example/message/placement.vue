<script lang="ts" setup>
import {
  FnButton,
  FnMessage,
} from 'fusion-ui-vue'
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-button
        color="success" @click="
          new FnMessage({
            severity: 'success',
            placement: { x: 'left', y: 'top' },
          }).push({
            content: 'this is a success message',
          })"
      >
        left top
      </fn-button>
      <fn-button
        color="success" @click="
          new FnMessage({
            severity: 'success',
            placement: { x: 'right' },
          }).push({
            content: 'this is a success message',
          })"
      >
        right top
      </fn-button>
    </div>
    <div fscw gap-2 flex justify-between>
      <fn-button
        color="success" @click="
          new FnMessage({
            severity: 'success',
            placement: { x: 'center', y: 'top' },
          }).push({
            content: 'this is a success message',
          })"
      >
        center top
      </fn-button>
      <fn-button
        color="success" @click="
          new FnMessage({
            severity: 'success',
            placement: { x: 'center', y: 'bottom' },
          }).push({
            content: 'this is a success message',
          })"
      >
        center bottom
      </fn-button>
    </div>
    <div fscw gap-2 flex justify-between>
      <fn-button
        color="success" @click="
          new FnMessage({
            severity: 'success',
            placement: { x: 'left', y: 'bottom' },
          }).push({
            content: 'this is a success message',
          })"
      >
        left bottom
      </fn-button>

      <fn-button
        color="success" @click="
          new FnMessage({
            severity: 'success',
            placement: { x: 'right', y: 'bottom' },
          }).push({
            content: 'this is a success message',
          })"
      >
        right bottom
      </fn-button>
    </div>
  </div>
</template>
