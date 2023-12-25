<template>
  <in-progress color="error" />
  <in-progress :color="theme => theme.colors.cyan[400]" />
  <in-progress color="error" variant="linear" />
  <in-progress :color="theme => theme.colors.cyan[400]" variant="linear" />
</template>
