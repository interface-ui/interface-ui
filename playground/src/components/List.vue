<script lang="ts" setup>
import '@fusion-ui-vue/components/divider/src/index.less' // 开发调试的样式
import '@fusion-ui-vue/components/list/src/index.less' // 开发调试的样式
import '@fusion-ui-vue/components/list-item/src/index.less' // 开发调试的样式
import {
  FnList,
  FnListItem,
  FnDivider,
  FnTypography,
  FnListItemPlaceholder,
} from '@fusion-ui-vue/components'
import {
  ContentCopyFilled,
  // ContentCutFilled,
  ContentPasteFilled,
  UndoFilled,
} from 'fusion-ui-iconify'
</script>

<template>
  <div style="width: 320px">
    <fn-list>
      <fn-list-item>
        <template #leading="icon">
          <content-copy-filled v-bind="icon" />
        </template>
        Cut
        <template #trailing>
          <fn-typography variant="label.large" cs="opacity: 0.6;">
            ⌘X
          </fn-typography>
        </template>
      </fn-list-item>
      <fn-list-item>
        <template #leading="icon">
          <!-- <content-cut-filled v-bind="icon" /> -->
          <fn-list-item-placeholder v-bind="icon" />
        </template>
        Copy
        <template #trailing>
          <fn-typography variant="label.large" cs="opacity: 0.6;">
            ⌘C
          </fn-typography>
        </template>
      </fn-list-item>
      <fn-list-item disabled>
        <template #leading="icon">
          <content-paste-filled v-bind="icon" />
        </template>
        Paste
        <template #trailing>
          <fn-typography variant="label.large" cs="opacity: 0.6;">
            ⌘V
          </fn-typography>
        </template>
      </fn-list-item>
      <fn-divider />
      <fn-list-item>
        <template #leading="icon">
          <undo-filled v-bind="icon" />
        </template>
        Undo
        <template #trailing>
          <fn-typography variant="label.large" cs="opacity: 0.6;">
            ⌘Z
          </fn-typography>
        </template>
      </fn-list-item>
    </fn-list>
  </div>
</template>
