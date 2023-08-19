<template>
  <div space-y-5 w-full>
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
      state="success"
      description="Use flexTip to add front fixed content to the description."
      closable
    >
      <template #fixedArea>
        <fn-icon icon="twemoji:2nd-place-medal" size="20" />
      </template>
    </fn-alert>

    <fn-alert
      state="danger"
      title="This is a title."
      description="Use flexTip to add front fixed content to the description."
      closable
    >
      <template #fixedArea>
        <fn-icon icon="twemoji:3rd-place-medal" size="20" />
      </template>
    </fn-alert>

    <fn-alert
      state="warning"
      title="This is a title."
      description="Use flexTip to add front fixed content to the description."
      closable
    >
      <template #fixedArea>
        Message:
      </template>
    </fn-alert>
  </div>
  <br>
</template>
```
