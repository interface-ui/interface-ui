<script lang="ts" setup>
import '@fusion-ui-vue/components/divider/src/index.less'
import '@fusion-ui-vue/components/list/src/index.less'
import '@fusion-ui-vue/components/list-item/src/index.less'
import '@fusion-ui-vue/components/list-item-header/src/index.less'
import '@fusion-ui-vue/components/badge/src/index.less'
import '@fusion-ui-vue/components/menu/src/index.less'
import {
  FnList,
  FnListItem,
  FnDivider,
  FnTypography,
  FnListItemPlaceholder,
  FnCollapse,
  FnSvgIcon,
  FnListItemHeader,
  FnBadge,
  FnAvatar,
  FnListItemText,
  FnButton,
  FnMenu,
} from '@fusion-ui-vue/components'
import {
  ContentCopyFilled,
  MoreOutlined,
  // ContentCutFilled,
  ExpandMoreFilled,
  ContentPasteFilled,
  UndoFilled,
  StarBorderOutlined,
  SendFilled,
  InboxFilled,
  ArrowRightFilled,
} from 'fusion-ui-iconify'
import { computed, ref } from 'vue'
import { useTheme } from '@fusion-ui-vue/theme'

const collapse = ref(false)
const showSublist = ref(false)
const anchor = ref<HTMLElement | MouseEvent | null>(null)
const theme = useTheme()
const rotate = computed(() => ({
  transform: collapse.value ? 'rotate(180deg)' : 'rotate(0)',
  transition: theme.value.motion.create(['all'], {
    duration: theme.value.motion.duration[500],
    timingFunction: theme.value.motion.timingFunction['easing-emphasized'],
  }),
}))
const handleContextMenu = (e: MouseEvent) => {
  e.preventDefault()
  anchor.value = e
}
</script>

<template>
  <div @contextmenu="handleContextMenu">
    <div class="content">
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
            <fn-list component="li" level="1" v-show="collapse">
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
      <div style="width: 320px">
        <fn-list background="surfaceContainer">
          <fn-list-item-header> Basic List </fn-list-item-header>
          <fn-list-item>
            <template #leading="{ icon }">
              <send-filled v-bind="icon" />
            </template>
            Send
          </fn-list-item>
          <fn-list-item>
            <template #leading="{ icon }">
              <inbox-filled v-bind="icon" />
            </template>
            Inbox
            <template #trailing>
              <fn-badge content="20" max="10" />
            </template>
          </fn-list-item>
          <fn-divider component="li" />
          <fn-list-item indent="1" disabled> Spam </fn-list-item>
          <fn-list-item indent="1"> Trash </fn-list-item>
        </fn-list>
      </div>
      <div style="width: 320px">
        <fn-list>
          <fn-list-item>
            <template #leading="{ avatar }">
              <fn-avatar cs="margin-bottom: auto;" v-bind="avatar">A</fn-avatar>
            </template>
            <fn-list-item-text
              headline="Brunch this weekend?"
              supporting-text="Ali Connors — I'll be in your neighborhood doing errands this…"
            />
          </fn-list-item>
          <fn-list-item highlight>
            <template #leading="{ avatar }">
              <fn-avatar v-bind="avatar">A</fn-avatar>
            </template>
            <fn-list-item-text
              headline="Brunch this weekend?"
              supporting-text="Ali Connors"
            />
          </fn-list-item>
        </fn-list>
      </div>
    </div>

    <fn-button @click="e => (anchor = e.currentTarget)">Show Menu</fn-button>
    <fn-menu
      cs="width: 150px;"
      :placement="{ x: 'right' }"
      :open="Boolean(anchor)"
      :anchor="anchor"
      @close="anchor = null"
    >
      <fn-list-item @click="anchor = null"> Copy </fn-list-item>
      <fn-list-item @click="anchor = null"> Cut </fn-list-item>
      <fn-list-item @click="anchor = null" disabled> Paste </fn-list-item>
      <fn-list-item
        @click="anchor = null"
        @mouseenter="showSublist = true"
        @mouseleave="showSublist = false"
      >
        More
        <template #trailing="icon">
          <arrow-right-filled v-bind="icon" />
        </template>
        <fn-list v-if="showSublist" sublist>
          <fn-list-item>
            <template #leading="{ icon }">
              <send-filled v-bind="icon" />
            </template>
            Send
          </fn-list-item>
          <fn-list-item>
            <template #leading="{ icon }">
              <inbox-filled v-bind="icon" />
            </template>
            Inbox
            <template #trailing>
              <fn-badge content="20" max="10" />
            </template>
          </fn-list-item>
          <fn-divider component="li" />
          <fn-list-item indent="1" disabled> Spam </fn-list-item>
          <fn-list-item indent="1"> Trash </fn-list-item>
        </fn-list>
      </fn-list-item>
      <fn-divider component="li" />
      <fn-list-item-header> Other actions </fn-list-item-header>
      <fn-list-item @click="anchor = null"> Save </fn-list-item>
    </fn-menu>
  </div>
</template>
