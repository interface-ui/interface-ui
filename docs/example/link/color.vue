<template>
  <fn-link href="#">Primary</fn-link>
  <fn-link href="#" color="error">Error</fn-link>
  <fn-link href="#" color="tertiary">Tertiary</fn-link>
  <fn-link href="#" :color="theme => theme.colors.cyan[400]">
    From Theme
  </fn-link>
  <fn-link href="#" color="#2E7D32">#2E7D32</fn-link>
</template>
