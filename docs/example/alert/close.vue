<script lang="ts" setup>
const handleClose = (evt: MouseEvent) => {
  alert('close')
}
</script>

<template>
  <div space-y-5 w-full>
    <fn-alert
      state="info"
      description="This is a description."
    />

    <fn-alert
      state="success"
      description="This is a description."
      closable
      @close="handleClose"
    />

    <fn-alert
      state="danger"
      description="This is a description."

      @close="handleClose"
    >
      <template #closeArea>
        Ikun
      </template>
    </fn-alert>

    <fn-alert
      state="warning"
      description="This is a description."
      @close="handleClose"
    >
      <template #closeArea>
        <fn-icon icon="ant-design:apple-outlined" />
      </template>
    </fn-alert>
  </div>
  <br>
</template>
```
