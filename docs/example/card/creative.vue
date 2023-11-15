<script lang="ts" setup>
import { styled } from '@fusion-ui-vue/theme'

const Box = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
</script>

<template>
  <fn-card cs="display: flex;">
    <fn-card-media
      cs="width: 160px; aspect-ratio: 1;"
      art="A 3D fantasy virtual reality landscape with pastel blue and violet colors."
      src="https://plus.unsplash.com/premium_photo-1699821958487-083a45450c27?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    <box>
      <fn-card-content>
        <fn-typography variant="h6" component="h1">
          Glass Souls' World Tour
        </fn-typography>
        <fn-typography variant="title.small" component="h2" cs="opacity: .5;">
          From your recent favorites
        </fn-typography>
      </fn-card-content>
      <fn-card-action cs="justify-content: flex-end;">
        <fn-button variant="text" shape="fullRounded">Buy Tickets</fn-button>
      </fn-card-action>
    </box>
  </fn-card>
</template>
