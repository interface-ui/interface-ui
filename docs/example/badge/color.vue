<template>
  <div fscw gap-10>
    <fn-badge variant="dot" color="tertiary">
      <fn-icon icon="mdi:bell" :color="theme => theme.colors.grey[500]" />
    </fn-badge>
    <fn-badge content="10" :color="theme => theme.colors.cyan[400]">
      <fn-button>Hello</fn-button>
    </fn-badge>
  </div>
</template>
