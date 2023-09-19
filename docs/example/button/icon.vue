<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-button variant="outlined">
        <template #default="icon">
          <fn-icon icon="mdi:delete" v-bind="icon" />
          delete
        </template>
      </fn-button>
      <fn-button>
        <template #default="icon">
          save
          <fn-icon icon="mdi:content-save" v-bind="icon" />
        </template>
      </fn-button>
    </div>
  </div>
</template>
