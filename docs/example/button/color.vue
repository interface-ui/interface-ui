<template>
  <div space-y-2>
    <div fscw gap-2>
      <in-button>primary</in-button>
      <in-button color="tertiary">tertiary</in-button>
      <in-button color="error">error</in-button>
      <in-button :color="theme => theme.colors.cyan[400]"> custom </in-button>
      <in-button color="#2E7D32">custom</in-button>
    </div>
  </div>
</template>
