<script setup lang="ts">
import {
  FnButton,
  FnCheckbox,
  FnRadio,
  FnIconButton,
  FnButtonGroup,
  FnTypography,
} from '@fusion-ui-vue/components'
import createTheme from '@fusion-ui-vue/theme'
import { ref } from 'vue'
import Child from './Child.vue'

const checked = ref<boolean>(false)
const picked = ref<string>('apple')
const theme = createTheme()
console.log(theme.value)

const changTheme = () => {
  theme.value.mode = theme.value.mode === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <!-- -------------------浅色/深色模式切换------------------- -->
  <header>
    <fn-button @click="changTheme">
      <!-- @vue-skip -->
      {{ theme.mode }}
    </fn-button>
  </header>

  <!-- -------------------新组建开发调试------------------- -->
  <div class="content">
    <fn-icon-button size="small" #default="icon">
      <fn-icon icon="mdi:delete" v-bind="icon" />
    </fn-icon-button>

    <fn-button-group variant="outlined">
      <fn-button>one</fn-button>
      <fn-button>two</fn-button>
      <fn-button>three</fn-button>
    </fn-button-group>
  </div>
  <div>
    <fn-checkbox v-model="checked" />
    <fn-checkbox v-model="checked" color="#6366f1" #default="icon">
      <fn-icon
        v-bind="icon"
        :icon="
          checked ? 'material-symbols:star' : 'material-symbols:star-outline'
        "
      />
    </fn-checkbox>
  </div>
  <div>
    <fn-radio v-model="picked" size="small" :value="1" />
    <fn-radio v-model="picked" size="small" color="error" :value="2" />
    <fn-radio
      v-model="picked"
      size="small"
      :color="theme => theme.colors.cyan[400]"
      :value="3"
    />
  </div>
  <div flex flex-col>
    <fn-typography gutter variant="h1"> h1. Heading </fn-typography>
    <fn-typography gutter variant="h2"> h2. Heading </fn-typography>
    <fn-typography gutter variant="h3"> h3. Heading </fn-typography>
    <fn-typography gutter variant="h4"> h4. Heading </fn-typography>
    <fn-typography gutter variant="h5"> h5. Heading </fn-typography>
    <fn-typography gutter variant="h6"> h6. Heading </fn-typography>
    <fn-typography gutter variant="title.small">
      title.small Title
    </fn-typography>
    <fn-typography gutter variant="title.medium">
      title.medium Title
    </fn-typography>
    <fn-typography gutter variant="title.large">
      title.large Title
    </fn-typography>
    <fn-typography gutter variant="body.small">
      body.small Anim laborum et minim esse ipsum minim proident eu officia anim
      amet eiusmod aute.
    </fn-typography>
    <fn-typography gutter variant="body.medium">
      body.medium Anim cillum ut deserunt sint culpa aliquip tempor cillum
      laborum aute.
    </fn-typography>
    <fn-typography gutter variant="body.large">
      body.large Consequat do incididunt nisi amet officia magna irure.
    </fn-typography>
    <fn-typography gutter variant="label.small">
      label.small Sint est deserunt velit.
    </fn-typography>
    <fn-typography gutter variant="label.medium">
      label.medium Ex est commodo.
    </fn-typography>
    <fn-typography gutter variant="label.large">
      label.large Dolor esse eu.
    </fn-typography>
  </div>
  <Child />
</template>
