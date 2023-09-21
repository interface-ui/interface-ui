<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-icon-button #default="icon">
        <fn-icon icon="mdi:fingerprint" v-bind="icon" />
      </fn-icon-button>
      <fn-icon-button color="secondary" #default="icon">
        <fn-icon icon="mdi:fingerprint" v-bind="icon" />
      </fn-icon-button>
      <fn-icon-button color="tertiary" #default="icon">
        <fn-icon icon="mdi:fingerprint" v-bind="icon" />
      </fn-icon-button>
      <fn-icon-button color="error" #default="icon">
        <fn-icon icon="mdi:fingerprint" v-bind="icon" />
      </fn-icon-button>
      <fn-icon-button
        :color="(theme) => theme.colors.cyan[400]"
        #default="icon"
      >
        <fn-icon icon="mdi:fingerprint" v-bind="icon" />
      </fn-icon-button>
      <fn-icon-button color="#2E7D32" #default="icon">
        <fn-icon icon="mdi:fingerprint" v-bind="icon" />
      </fn-icon-button>
    </div>
  </div>
</template>
