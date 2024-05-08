<script lang="ts" setup name="demo-block">
import { computed } from 'vue'
import { useClipboard, useToggle } from '@vueuse/core'
import { useData } from 'vitepress'
import { demoProps } from './index'

const props = defineProps(demoProps)

const { site } = useData()
const decodedHighlightedCode = computed(() =>
  decodeURIComponent(props.highlightedCode),
)

const { copy, copied } = useClipboard({
  source: decodeURIComponent(props.code),
})
const [value, toggle] = useToggle()

const MAIN_FILE_NAME = 'component.vue'

/**
 *  Base64 编码
 */
const sourceHash = computed(() => {
  const originCode = {
    [MAIN_FILE_NAME]: decodeURIComponent(props.code),
  }
  return btoa(unescape(encodeURIComponent(JSON.stringify(originCode))))
})

/**
 * 跳转到 Playground
 */
function toPlayground() {
  window.open(
    `${window.location.origin}${site.value.base}playground.html#${sourceHash.value}`,
    '_blank',
  )
}
</script>

<template>
  <ClientOnly>
    <div v-bind="$attrs" class="mt-6 demo-block">
      <div
        class="o-demo_wrapper vp-raw bg"
        :class="[$props.col ? 'flex-col' : '']"
      >
        <slot />
      </div>
      <div class="relative">
        <div class="o-demo_actions">
          <a
            class="o-demo_action_item"
            group
            target="_blank"
            @click="toPlayground"
          >
            <div class="o-demo_action_icon i-carbon:chemistry" />
            <div class="o-demo_tooltip" group-hover:opacity-100>
              Open on Playground(WIP)
            </div>
          </a>
          <a class="o-demo_action_item" group :href="github" target="_blank">
            <div class="o-demo_action_icon i-carbon-logo-github" />
            <div class="o-demo_tooltip" group-hover:opacity-100>
              Edit on GitHub
            </div>
          </a>
          <button class="o-demo_action_item" group @click="copy()">
            <div class="o-demo_action_icon i-carbon:copy" />
            <div class="o-demo_tooltip" group-hover:opacity-100>
              {{ copied ? 'Copied' : 'Copy code' }}
            </div>
          </button>
          <button class="o-demo_action_item" group @click="toggle()">
            <div class="o-demo_action_icon i-carbon:fit-to-width" />
            <div class="o-demo_tooltip" group-hover:opacity-100>
              {{ value ? 'Hidden code' : 'Expand code' }}
            </div>
          </button>
        </div>
        <div
          v-if="$props.highlightedPreviewCode"
          v-show="!value"
          :class="`language-${lang} extra-class`"
          v-html="decodeURIComponent($props.highlightedPreviewCode)"
        />
        <div
          v-show="value"
          :class="`language-${lang} extra-class`"
          v-html="decodedHighlightedCode"
        />
      </div>
    </div>
  </ClientOnly>
</template>
