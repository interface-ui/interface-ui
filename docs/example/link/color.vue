<template>
  <in-link href="#">Primary</in-link>
  <in-link href="#" color="error">Error</in-link>
  <in-link href="#" color="tertiary">Tertiary</in-link>
  <in-link href="#" :color="theme => theme.colors.cyan[400]">
    From Theme
  </in-link>
  <in-link href="#" color="#2E7D32">#2E7D32</in-link>
</template>
