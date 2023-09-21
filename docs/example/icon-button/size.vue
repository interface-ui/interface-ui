<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-icon-button size="small" #default="icon">
        <fn-icon icon="mdi:delete" v-bind="icon" />
      </fn-icon-button>
      <fn-icon-button #default="icon">
        <fn-icon icon="mdi:delete" v-bind="icon" />
      </fn-icon-button>
      <fn-icon-button size="large" #default="icon">
        <fn-icon icon="mdi:delete" v-bind="icon" />
      </fn-icon-button>
    </div>
  </div>
</template>
