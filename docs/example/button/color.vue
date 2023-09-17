<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-button>primary</fn-button>
      <fn-button color="tertiary">tertiary</fn-button>
      <fn-button color="error">error</fn-button>
      <fn-button :color="(theme) => theme.colors.cyan[400]"> custom </fn-button>
      <fn-button color="#2E7D32">custom</fn-button>
    </div>
    <div fscw gap-2 />
  </div>
</template>
