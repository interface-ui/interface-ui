<template>
  <div space-y-5 w-full>
    <in-alert
      severity="error"
      :cs="{
        backgroundColor: '#6396e1',
        '.in-alert--message': {
          color: 'yellow',
        },
      }"
    >
      This is an error alert — check it out!
    </in-alert>
  </div>
  <br />
</template>
