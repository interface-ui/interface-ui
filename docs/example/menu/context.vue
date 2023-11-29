<script lang="ts" setup>
import { ref } from 'vue'
import * as pkg from 'fusion-ui-iconify'

const { ContentCopyFilled, ContentCutFilled, ContentPasteFilled, UndoFilled } =
  pkg
const anchor = ref<HTMLElement | MouseEvent | null>(null)
const handleContextMenu = (e: MouseEvent) => {
  e.preventDefault()
  anchor.value = e
}
</script>

<template>
  <div @contextmenu="handleContextMenu">
    <fn-typography>
      Cupidatat Lorem proident esse enim ullamco non dolor fugiat ut. Officia
      cillum sit ut incididunt laborum deserunt cupidatat labore laboris velit
      deserunt eiusmod. Occaecat tempor dolore do ipsum eiusmod eiusmod
      adipisicing nostrud labore. Fugiat tempor amet quis elit sit consequat
      veniam. Deserunt in ipsum in est veniam sit dolor tempor cupidatat laboris
      fugiat. Sint culpa culpa et consequat pariatur exercitation officia nisi
      esse pariatur ad ipsum. Eiusmod deserunt est ea mollit veniam. Ea proident
      ea duis veniam eu elit commodo voluptate mollit aliquip.
    </fn-typography>
  </div>
  <fn-menu
    keep-mounted
    :open="Boolean(anchor)"
    :anchor="anchor"
    :placement="{ x: 'right' }"
    cs="width: 200px;"
    @close="anchor = null"
  >
    <fn-list-item>
      <template #leading="{ icon }">
        <content-copy-filled v-bind="icon" />
      </template>
      Copy
      <template #trailing>
        <fn-typography variant="label.large" cs="opacity: 0.6;">
          ⌘C
        </fn-typography>
      </template>
    </fn-list-item>
    <fn-list-item disabled>
      <template #leading="{ icon }">
        <content-paste-filled v-bind="icon" />
      </template>
      Paste
      <template #trailing>
        <fn-typography variant="label.large" cs="opacity: 0.6;">
          ⌘V
        </fn-typography>
      </template>
    </fn-list-item>
    <fn-list-item>
      <template #leading="{ icon }">
        <content-cut-filled v-bind="icon" />
      </template>
      Cut
      <template #trailing>
        <fn-typography variant="label.large" cs="opacity: 0.6;">
          ⌘X
        </fn-typography>
      </template>
    </fn-list-item>
    <fn-list-item>
      <template #leading="{ icon }">
        <undo-filled v-bind="icon" />
      </template>
      Undo
      <template #trailing>
        <fn-typography variant="label.large" cs="opacity: 0.6;">
          ⌘Z
        </fn-typography>
      </template>
    </fn-list-item>
  </fn-menu>
</template>
