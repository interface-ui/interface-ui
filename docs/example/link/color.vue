<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-link>
        Link
      </fn-link>
      <fn-link color="error">
        Link
      </fn-link>
      <fn-link color="tertiary">
        Link
      </fn-link>
      <fn-link :color="(theme) => theme.colors.cyan[400]">
        Link
      </fn-link>
      <fn-link color="#2E7D32">
        Link
      </fn-link>
    </div>
  </div>
</template>
