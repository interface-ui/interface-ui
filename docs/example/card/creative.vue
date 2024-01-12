<script lang="ts" setup>
import { styled } from '@interface-ui/theme'

const Box = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
</script>

<template>
  <in-card cs="display: flex;">
    <in-card-media
      cs="width: 160px; aspect-ratio: 1;"
      art="A 3D fantasy virtual reality landscape with pastel blue and violet colors."
      src="https://plus.unsplash.com/premium_photo-1699821958487-083a45450c27?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    <box>
      <in-card-content>
        <in-typography variant="h6" component="h1">
          Glass Souls' World Tour
        </in-typography>
        <in-typography variant="title.small" component="h2" cs="opacity: .5;">
          From your recent favorites
        </in-typography>
      </in-card-content>
      <in-card-action cs="justify-content: flex-end;">
        <in-button variant="text">Buy Tickets</in-button>
      </in-card-action>
    </box>
  </in-card>
</template>
