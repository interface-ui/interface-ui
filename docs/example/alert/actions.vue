<template>
  <div space-y-5 w-full>
    <fn-alert severity="error">
      This is an error alert — check it out!
      <template #action>
        <fn-button variant="text">
          CLOSE
        </fn-button>
      </template>
    </fn-alert>
    <fn-alert severity="warning">
      This is an warning alert — check it out!
      <template #action>
        <fn-icon-button v-slot="icon" size="large">
          <fn-icon icon="mdi:delete" v-bind="icon" />
        </fn-icon-button>
      </template>
    </fn-alert>
  </div>
  <br>
</template>
