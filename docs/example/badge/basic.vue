<template>
  <div fscw gap-10>
    <fn-badge variant="dot">
      <fn-button>Dot</fn-button>
    </fn-badge>
    <fn-badge content="10">
      <fn-button>Hello</fn-button>
    </fn-badge>
    <fn-badge content="6">
      <fn-icon icon="mdi:bell" :color="theme => theme.colors.grey[500]" />
    </fn-badge>
  </div>
</template>
