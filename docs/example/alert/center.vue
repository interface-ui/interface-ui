<script lang="ts" setup>
const handleClose = (evt: MouseEvent) => {
  alert('close')
}
</script>

<template>
  <div space-y-5 w-full>
    <fn-alert
      center
      state="info"
      description="This is a description."
    >
      <template #closeArea>
        <fn-icon icon="streamline-emojis:artist-palette" />
      </template>
    </fn-alert>

    <fn-alert
      center
      state="success"
      description="This is a description."
    >
      <template #closeArea>
        <fn-icon icon="streamline-emojis:artist-palette" />
      </template>
    </fn-alert>

    <fn-alert
      state="danger"
      center
      description="This is a description."
    >
      <template #closeArea>
        <fn-icon icon="streamline-emojis:artist-palette" />
      </template>
    </fn-alert>

    <fn-alert
      center
      state="warning"
      description="This is a description."
    >
      <template #closeArea>
        <fn-icon icon="streamline-emojis:artist-palette" />
      </template>
    </fn-alert>
  </div>
  <br>
</template>
```
