<script setup lang="ts">
import { FnButton } from '@fusion-ui/components'
import { ref } from 'vue'
const button = ref('深色')

const changTheme = () => {
  const html = document.documentElement as HTMLElement
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    html.setAttribute('data-theme', 'light')
    button.value = '浅色'
  } else {
    html.classList.add('dark')
    html.setAttribute('data-theme', 'dark')
    button.value = '深色'
  }
}
// const checkedNames = ref([])

// const yyy = ref(true)
// const value1 = ref(10)
</script>

<template>
  <!-- -------------------浅色/深色模式切换------------------- -->
  <header>
    <fn-button @click="changTheme">
      {{ button }}
    </fn-button>
  </header>

  <!-- -------------------新组建开发调试------------------- -->

  <div class="content">
    <div class="label-small">Label-small</div>
    <div class="label-medium">Label-medium</div>
    <div class="label-large">Label-large</div>

    <div class="body-small">Body-small</div>
    <div class="body-medium">Body-medium</div>
    <div class="body-large">Body-large</div>

    <div class="title-small">Title-small</div>
    <div class="title-medium">Title-medium</div>
    <div class="title-large">Title-large</div>

    <h6 class="headline-small">Headline-small</h6>
    <h5 class="headline-medium">Headline-medium</h5>
    <h4 class="headline-large">Headline-large</h4>

    <h3 class="display-small">Display-small</h3>
    <h2 class="display-medium">Display-medium</h2>
    <h1 class="display-large">Display-large</h1>
    <!-- <fn-form-label label="Left" label-placement="left">
      <fn-checkbox v-model="checked" size="small" />
    </fn-form-label>
    <fn-form-label label="Top" label-placement="top">
      <fn-checkbox v-model="checked" size="small" />
    </fn-form-label>
    <fn-form-label label="Bottom" label-placement="bottom">
      <fn-checkbox v-model="checked" size="small" />
    </fn-form-label> -->

    <!-- <fnAvatar
      alt="Remy Sharp"
      src="https://mui.com/static/images/avatar/1.jpg"
    />
    <fn-checkbox></fn-checkbox>
    <fn-progress :percentage="value1" />
    <FnSwtich
      v-model="yyy"
      checked-text="dfa"
      un-checked-text="dfa"
      un-checked-icon="ri:alarm-line"
    />
    <br />
    <FnAlert
      center
      v-model="yyy"
      checked-text="dfa"
      title="123"
      un-checked-text="dfa"
      un-checked-icon="ri:alarm-line"
    />
    <br />
    <fn-alert
      state="info"
      fixed-tip="Message："
      description="Use flexTip to add front fixed content to the description."
    >
      <template #fixedArea>
        <fn-icon icon="twemoji:1st-place-medal" size="20" />
      </template>
    </fn-alert>
    <fn-alert
      state="danger"
      fixed-tip="Message："
      description="Use flexTip to add front fixed content to the description."
    >
      <template #fixedArea>
        <fn-icon icon="twemoji:1st-place-medal" size="20" />
      </template>
    </fn-alert>
    <fn-alert
      title="This is a title."
      description="This is a description."
      state="info"
      closable
    />
    <fn-alert
      state="warning"
      title="This is a title."
      description="Use flexTip to add front fixed content to the description."
      closable
    >
      <template #fixedArea> Message: </template>
    </fn-alert>

    <fn-alert
      state="info"
      scrollable
      :duration="10"
      description="By default, scrolling to the left is enabled using the 'scrollable' attribute, and the duration of the scrollbar can also be defined through the 'duration' attribute."
    />

    <fn-alert
      state="success"
      fixed-tip="Message："
      scrollable
      :duration="8"
      description="By default, scrolling to the left is enabled using the 'scrollable' attribute, and the duration of the scrollbar can also be defined through the 'duration' attribute."
      closable
    />

    <fn-alert
      state="warning"
      scrollable
      direction="top"
      description="By default, scrolling to the left is enabled using the 'scrollable' attribute, and the duration of the scrollbar can also be defined through the 'duration' attribute."
      closable
    >
      <template #fixedArea> Message: </template>
    </fn-alert>

    <fn-alert
      state="danger"
      scrollable
      direction="top"
      title="This is a title"
      :duration="5"
      description="By default, scrolling to the left is enabled using the 'scrollable' attribute, and the duration of the scrollbar can also be defined through the 'duration' attribute."
      closable
    >
      <template #fixedArea> Message: </template>
    </fn-alert> -->
  </div>
</template>

<style scoped>
header {
  float: right;
}
.content {
  width: 100%;
  height: 100%;
  /* display: flex; */
  /* text-align: center;
  justify-content: center; */
}
</style>
