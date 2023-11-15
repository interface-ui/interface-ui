<script lang="ts" setup>
import '@fusion-ui-vue/components/card/src/index.less'
import '@fusion-ui-vue/components/card-content/src/index.less'
import '@fusion-ui-vue/components/card-header/src/index.less'
import '@fusion-ui-vue/components/card-action/src/index.less'
import '@fusion-ui-vue/components/card-media/src/index.less'
import '@fusion-ui-vue/components/action-area/src/index.less'
import {
  FnCard,
  FnCardContent,
  FnTypography,
  FnIconButton,
  FnActionArea,
} from '@fusion-ui-vue/components'
import { MoreVertFilled, FavoriteFilled, ShareFilled } from 'fusion-ui-iconify'
</script>

<template>
  <div class="content">
    <fn-card>
      <fn-card-content>
        <fn-typography gutter cs="opacity: .5;">
          Word of the Day
        </fn-typography>
        <fn-typography variant="h5" component="div">
          be • nev • o • lent
        </fn-typography>
        <fn-typography cs="margin-bottom: 12px;"> adjective </fn-typography>
        <fn-typography cs="opacity: .5;">
          well meaning and kindly.
          <br />
          a benevolent smile
        </fn-typography>
      </fn-card-content>
    </fn-card>
    <fn-card variant="filled">
      <fn-card-content>
        <fn-typography gutter cs="opacity: .5;">
          Word of the Day
        </fn-typography>
        <fn-typography variant="h5" component="div">
          be • nev • o • lent
        </fn-typography>
        <fn-typography cs="margin-bottom: 12px;"> adjective </fn-typography>
        <fn-typography cs="opacity: .5;">
          well meaning and kindly.
          <br />
          a benevolent smile
        </fn-typography>
      </fn-card-content>
    </fn-card>
    <fn-card variant="outlined">
      <fn-card-content>
        <fn-typography gutter cs="opacity: .5;">
          Word of the Day
        </fn-typography>
        <fn-typography variant="h5" component="div">
          be • nev • o • lent
        </fn-typography>
        <fn-typography cs="margin-bottom: 12px;"> adjective </fn-typography>
        <fn-typography cs="opacity: .5;">
          well meaning and kindly.
          <br />
          a benevolent smile
        </fn-typography>
      </fn-card-content>
    </fn-card>
  </div>
  <div class="content">
    <fn-card cs="max-width: 345px;">
      <fn-card-header>
        <template #avatar>
          <fn-avatar>R</fn-avatar>
        </template>
        <fn-typography variant="title.medium" component="h1">
          Health Essentials
        </fn-typography>
        <fn-typography component="h2" variant="title.small" cs="opacity: .5;">
          November 14, 2023
        </fn-typography>
        <template #action>
          <fn-icon-button color="onSurfaceVariant" cs="opacity: .5;">
            <more-vert-filled />
          </fn-icon-button>
        </template>
      </fn-card-header>
      <fn-card-media
        art="unsplast food photo"
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <fn-card-content>
        <fn-typography>
          A concise guide covering key health topics like diet, exercise, and
          mental well-being, designed for a quick yet informative read.
        </fn-typography>
      </fn-card-content>
      <fn-card-action>
        <fn-icon-button color="onSurfaceVariant" cs="opacity: .5;">
          <favorite-filled />
        </fn-icon-button>
        <fn-icon-button color="onSurfaceVariant" cs="opacity: .5;">
          <share-filled />
        </fn-icon-button>
      </fn-card-action>
    </fn-card>

    <fn-card cs="max-width: 345px;">
      <fn-card-media
        shape="rounded"
        art="A 3D fantasy virtual reality landscape with pastel blue and violet colors."
        src="https://plus.unsplash.com/premium_photo-1699821958487-083a45450c27?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <fn-card-header>
        <fn-typography variant="h6" component="h1">
          Glass Souls' World Tour
        </fn-typography>
        <fn-typography variant="title.small" component="h2" cs="opacity: .5;">
          From your recent favorites
        </fn-typography>
      </fn-card-header>
      <fn-card-action>
        <fn-button shape="fullRounded">Buy Tickets</fn-button>
      </fn-card-action>
    </fn-card>
  </div>

  <div class="content">
    <fn-card cs="max-width: 400px;">
      <fn-action-area>
        <fn-card-header>
          <fn-typography variant="h6" component="h1">
            Word of the Day
          </fn-typography>
          <fn-typography component="h2" variant="title.small" cs="opacity: .5;">
            November 14, 2023
          </fn-typography>
        </fn-card-header>
        <fn-card-content>
          <fn-typography cs="opacity: .5">
            An exploration of nature's serene beauty, from lush forests to
            tranquil rivers, highlighting the delicate balance and intricate
            connections within ecosystems.
          </fn-typography>
        </fn-card-content>
        <fn-card-media
          cs="padding-bottom: 16px;"
          gutter
          shape="rounded"
          art="nature"
          src="https://images.unsplash.com/photo-1698778573682-346d219402b5?q=80&w=2636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </fn-action-area>
    </fn-card>
  </div>
</template>
