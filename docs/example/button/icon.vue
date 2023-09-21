<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-button variant="outlined" #default="icon">
        <fn-icon icon="mdi:delete" v-bind="icon" />
        delete
      </fn-button>
      <fn-button #default="icon">
        save
        <fn-icon icon="mdi:content-save" v-bind="icon" />
      </fn-button>
    </div>
  </div>
</template>
