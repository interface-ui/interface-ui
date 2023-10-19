<template>
  <div fscw gap-10>
    <fn-badge content="1000" max="999">
      <fn-icon-button v-slot="icon" color="secondary">
        <fn-icon icon="mdi:bell" v-bind="icon" />
      </fn-icon-button>
    </fn-badge>
    <fn-badge :content="1000" :max="99">
      <fn-icon-button v-slot="icon" color="tertiary">
        <fn-icon icon="mdi:email" v-bind="icon" />
      </fn-icon-button>
    </fn-badge>
  </div>
</template>
