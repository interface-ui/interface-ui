<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-icon-button #default="icon">
        <fn-icon icon="mdi:cake-variant" v-bind="icon" />
      </fn-icon-button>
      <fn-icon-button disabled #default="icon">
        <fn-icon icon="mdi:cake-variant" v-bind="icon" />
      </fn-icon-button>
    </div>
  </div>
</template>
