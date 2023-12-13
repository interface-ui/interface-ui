<template>
  <fn-chip color="primaryContainer"> Primary </fn-chip>
  <fn-chip color="error" variant="outlined"> Error </fn-chip>
  <fn-chip :color="theme => theme.colors.cyan[400]" variant="outlined">
    Success
  </fn-chip>
</template>
