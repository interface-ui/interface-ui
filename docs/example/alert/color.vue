<template>
  <div space-y-5 w-full>
    <fn-alert
      severity="error" :cs="{
        backgroundColor: '#6396e1',
        '.fn-alert--message': {
          color: 'yellow',
        },
      }"
    >
      This is an error alert — check it out!
    </fn-alert>
  </div>
  <br>
</template>
