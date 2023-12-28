<script lang="ts" setup>
import '@core/divider/src/index.less'
import '@core/list/src/index.less'
import '@core/list-item/src/index.less'
import '@core/list-item-header/src/index.less'
import '@core/badge/src/index.less'
import '@core/menu/src/index.less'
import {
  InList,
  InListItem,
  InDivider,
  InTypography,
  InCollapse,
  InSvgIcon,
  InListItemHeader,
  InBadge,
  InAvatar,
  InHeadlineText,
  InButton,
  InMenu,
} from '@interface-ui/core'
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
import { useTheme } from '@interface-ui/theme'

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

const highlightItem = ref(0)
const handleClick = (num: number) => {
  highlightItem.value = num
}
</script>

<template>
  <div @contextmenu="handleContextMenu">
    <div class="content">
      <div style="width: 320px">
        <in-list>
          <in-list-item>
            <template #leading="{ icon }">
              <content-copy-filled v-bind="icon" />
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
              <in-list-item-placeholder v-bind="icon" />
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
              <content-paste-filled v-bind="icon" />
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
              <more-outlined v-bind="icon" />
            </template>
            More
            <template #trailing>
              <in-svg-icon :cs="rotate" :component="ExpandMoreFilled" />
            </template>
          </in-list-item>
          <in-collapse>
            <in-list component="li" level="1" v-show="collapse">
              <in-list-item>
                <template #leading="{ icon }">
                  <undo-filled v-bind="icon" />
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
              <star-border-outlined v-bind="icon" />
            </template>
            Save
          </in-list-item>
        </in-list>
      </div>
      <div style="width: 320px">
        <in-list background="surfaceContainer">
          <in-list-item-header> Basic List </in-list-item-header>
          <in-list-item>
            <template #leading="{ icon }">
              <send-filled v-bind="icon" />
            </template>
            Send
          </in-list-item>
          <in-list-item>
            <template #leading="{ icon }">
              <inbox-filled v-bind="icon" />
            </template>
            Inbox
            <template #trailing>
              <in-badge content="20" max="10" />
            </template>
          </in-list-item>
          <in-divider component="li" />
          <in-list-item indent="1" disabled> Spam </in-list-item>
          <in-list-item indent="1"> Trash </in-list-item>
        </in-list>
      </div>
      <div style="width: 320px">
        <in-list>
          <in-list-item>
            <template #leading="{ avatar }">
              <in-avatar cs="margin-bottom: auto;" v-bind="avatar">A</in-avatar>
            </template>
            <in-headline-text
              headline="Brunch this weekend?"
              supporting-text="Ali Connors — I'll be in your neighborhood doing errands this…"
            />
          </in-list-item>
          <in-list-item highlight>
            <template #leading="{ avatar }">
              <in-avatar v-bind="avatar">A</in-avatar>
            </template>
            <in-headline-text
              headline="Brunch this weekend?"
              supporting-text="Ali Connors"
            />
          </in-list-item>
        </in-list>
      </div>
    </div>

    <in-button @click="e => (anchor = e.currentTarget)">Show Menu</in-button>
    <in-menu
      cs="width: 150px;"
      :placement="{ x: 'right' }"
      :open="Boolean(anchor)"
      :anchor="anchor"
      @close="anchor = null"
    >
      <in-list-item @click="anchor = null"> Copy </in-list-item>
      <in-list-item @click="anchor = null"> Cut </in-list-item>
      <in-list-item @click="anchor = null" disabled> Paste </in-list-item>
      <in-list-item
        @click="anchor = null"
        @mouseenter="showSublist = true"
        @mouseleave="showSublist = false"
      >
        More
        <template #trailing="icon">
          <arrow-right-filled v-bind="icon" />
        </template>
        <in-list v-if="showSublist" sublist>
          <in-list-item>
            <template #leading="{ icon }">
              <send-filled v-bind="icon" />
            </template>
            Send
          </in-list-item>
          <in-list-item>
            <template #leading="{ icon }">
              <inbox-filled v-bind="icon" />
            </template>
            Inbox
            <template #trailing>
              <in-badge content="20" max="10" />
            </template>
          </in-list-item>
          <in-divider component="li" />
          <in-list-item indent="1" disabled> Spam </in-list-item>
          <in-list-item indent="1"> Trash </in-list-item>
        </in-list>
      </in-list-item>
      <in-divider component="li" />
      <in-list-item-header> Other actions </in-list-item-header>
      <in-list-item @click="anchor = null"> Save </in-list-item>
    </in-menu>

    <div style="width: 320px">
      <in-list component="nav" highlight-color="tertiaryContainer">
        <in-list-item :highlight="highlightItem === 0" @click="handleClick(0)">
          Getting Started
        </in-list-item>
        <in-list-item :highlight="highlightItem === 1" @click="handleClick(1)">
          Components
        </in-list-item>
        <in-list-item
          highlight-color="primaryContainer"
          :highlight="highlightItem === 2"
          @click="handleClick(2)"
        >
          APIs
        </in-list-item>
        <in-list-item :highlight="highlightItem === 3" @click="handleClick(3)">
          Customization
        </in-list-item>
      </in-list>
    </div>
  </div>
</template>
