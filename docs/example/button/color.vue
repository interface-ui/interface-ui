<template>
  <in-button color="tertiary">tertiary</in-button>
  <in-button color="error">error</in-button>
  <in-button :color="theme => theme.colors.cyan[400]"> custom </in-button>
  <in-button color="#2E7D32">custom</in-button>
</template>
