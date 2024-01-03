<script lang="ts" setup>
import { useTheme } from '@interface-ui/theme'
import { computed, ref } from 'vue'
import ContentCopy from '@interface-ui/icons/ContentCopyFilled.js'
import ContentCut from '@interface-ui/icons/ContentCutFilled.js'
import ContentPaste from '@interface-ui/icons/ContentPasteFilled.js'
import ExpandMore from '@interface-ui/icons/ExpandMoreFilled.js'
import More from '@interface-ui/icons/MoreOutlined.js'
import StarBorder from '@interface-ui/icons/StarBorderOutlined.js'
import Undo from '@interface-ui/icons/UndoFilled.js'

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
    <in-list>
      <in-list-item>
        <template #leading="{ icon }">
          <content-copy v-bind="icon" />
        </template>
        Copy
        <template #trailing>
          <in-typography variant="label.large" cs="opacity: 0.6;">
            ⌘X
          </in-typography>
        </template>
      </in-list-item>
      <in-list-item>
        <template #leading="{ icon }">
          <content-cut v-bind="icon" />
        </template>
        Cut
        <template #trailing>
          <in-typography variant="label.large" cs="opacity: 0.6;">
            ⌘C
          </in-typography>
        </template>
      </in-list-item>
      <in-list-item disabled>
        <template #leading="{ icon }">
          <content-paste v-bind="icon" />
        </template>
        Paste
        <template #trailing>
          <in-typography variant="label.large" cs="opacity: 0.6;">
            ⌘V
          </in-typography>
        </template>
      </in-list-item>
      <in-list-item @click="collapse = !collapse">
        <template #leading="{ icon }">
          <more v-bind="icon" />
        </template>
        More
        <template #trailing>
          <in-svg-icon :cs="rotate" :component="ExpandMore" />
        </template>
      </in-list-item>
      <in-collapse>
        <in-list v-show="collapse" component="li" level="1">
          <in-list-item>
            <template #leading="{ icon }">
              <undo v-bind="icon" />
            </template>
            Undo
            <template #trailing>
              <in-typography variant="label.large" cs="opacity: 0.6;">
                ⌘Z
              </in-typography>
            </template>
          </in-list-item>
        </in-list>
      </in-collapse>
      <in-divider component="li" />
      <in-list-item-header> Other actions </in-list-item-header>
      <in-list-item>
        <template #leading="{ icon }">
          <star-border v-bind="icon" />
        </template>
        Save
      </in-list-item>
    </in-list>
  </div>
</template>
