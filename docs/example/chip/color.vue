<template>
  <in-chip color="primaryContainer"> Primary </in-chip>
  <in-chip color="error" variant="outlined"> Error </in-chip>
  <in-chip :color="theme => theme.colors.cyan[400]" variant="outlined">
    Success
  </in-chip>
</template>
