<script lang="ts" setup>
import { useTheme } from '@fusion-ui-vue/theme'
import * as pkg from 'fusion-ui-iconify'
import { computed, ref } from 'vue'

const {
  ContentCopyFilled,
  MoreOutlined,
  ContentCutFilled,
  ExpandMoreFilled,
  ContentPasteFilled,
  UndoFilled,
  StarBorderOutlined,
} = pkg

const collapse = ref(false)
const theme = useTheme()
const rotate = computed(() => ({
  transform: collapse.value ? 'rotate(180deg)' : 'rotate(0)',
  transition: theme.value.motion.create(['all'], {
    duration: theme.value.motion.duration[500],
    timingFunction: theme.value.motion.timingFunction['easing-emphasized'],
  }),
}))
</script>

<template>
  <div style="width: 320px">
    <fn-list>
      <fn-list-item>
        <template #leading="{ icon }">
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
        <template #leading="{ icon }">
          <content-cut-filled v-bind="icon" />
        </template>
        Cut
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
      <fn-list-item @click="collapse = !collapse">
        <template #leading="{ icon }">
          <more-outlined v-bind="icon" />
        </template>
        More
        <template #trailing>
          <fn-svg-icon :cs="rotate" :component="ExpandMoreFilled" />
        </template>
      </fn-list-item>
      <fn-collapse>
        <fn-list v-show="collapse" component="li" level="1">
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
        </fn-list>
      </fn-collapse>
      <fn-divider component="li" />
      <fn-list-item-header> Other actions </fn-list-item-header>
      <fn-list-item>
        <template #leading="{ icon }">
          <star-border-outlined v-bind="icon" />
        </template>
        Save
      </fn-list-item>
    </fn-list>
  </div>
</template>
