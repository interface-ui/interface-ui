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
  FnCollapse,
  FnSvgIcon,
} from '@fusion-ui-vue/components'
import {
  ContentCopyFilled,
  MoreOutlined,
  // ContentCutFilled,
  ExpandMoreFilled,
  ContentPasteFilled,
  UndoFilled,
  StarBorderOutlined,
} from 'fusion-ui-iconify'
import { ref } from 'vue'

const collapse = ref(false)
</script>

<template>
  <div style="width: 320px">
    <fn-list>
      <fn-list-item>
        <template #leading="icon">
          <content-copy-filled v-bind="icon" />
        </template>
        Copy
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
        Cut
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
      <fn-list-item @click="collapse = !collapse">
        <template #leading="icon">
          <more-outlined v-bind="icon" />
        </template>
        More
        <template #trailing>
          <fn-svg-icon
            :cs="{
              transform: collapse ? 'rotate(180deg)' : 'rotate(0)',
              transition: 'all .5s cubic-bezier(0.4, 0, 0.2, 1)',
            }"
            :component="ExpandMoreFilled"
          />
        </template>
      </fn-list-item>
      <fn-collapse>
        <fn-list component="li" level="1" v-show="collapse">
          <fn-list-item :indent="1">
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
      </fn-collapse>
      <fn-divider />
      <fn-list-item>
        <template #leading="icon">
          <star-border-outlined v-bind="icon" />
        </template>
        Save
      </fn-list-item>
    </fn-list>
  </div>
</template>
