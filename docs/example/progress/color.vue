<template>
  <fn-progress color="error" />
  <fn-progress :color="theme => theme.colors.cyan[400]" />
  <fn-progress color="error" variant="linear" />
  <fn-progress :color="theme => theme.colors.cyan[400]" variant="linear" />
</template>
