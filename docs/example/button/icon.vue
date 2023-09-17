<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-button variant="outlined">
        <template #startIcon="icon">
          <fn-icon icon="mdi:delete" v-bind="icon" />
        </template>
        delete
      </fn-button>
      <fn-button>
        save
        <template #endIcon="icon">
          <fn-icon icon="mdi:content-save" v-bind="icon" />
        </template>
      </fn-button>
    </div>
  </div>
</template>
