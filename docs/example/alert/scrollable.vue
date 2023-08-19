<template>
  <div space-y-5 w-full>
    <fn-alert
      state="info"
      scrollable
      duration="10"
      description="By default, scrolling to the left is enabled using the 'scrollable' attribute, and the duration of the scrollbar can also be defined through the 'duration' attribute."
    />

    <fn-alert
      state="success"
      fixed-tip="Message："
      scrollable
      duration="8"
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
      <template #fixedArea>
        Message:
      </template>
    </fn-alert>

    <fn-alert
      state="danger"
      scrollable
      direction="top"
      title="This is a title"
      duration="5"
      description="By default, scrolling to the left is enabled using the 'scrollable' attribute, and the duration of the scrollbar can also be defined through the 'duration' attribute."
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
