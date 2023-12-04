<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'

const { InfoOutlined } = pkg
</script>

<template>
  <div style="width: 320px">
    <fn-list :selectable="false">
      <fn-list-item>
        <template #leading="{ avatar }">
          <fn-avatar
            v-bind="avatar"
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        </template>
        <fn-headline-text headline="Remy Sharp" supporting-text="He/Him" />
        <template #trailing>
          <fn-icon-button>
            <info-outlined />
          </fn-icon-button>
        </template>
      </fn-list-item>
      <fn-divider component="li" variant="inset" no-margin />
      <fn-list-item>
        <template #leading="{ avatar }">
          <fn-avatar
            v-bind="avatar"
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        </template>
        <fn-headline-text headline="Travis Howard" supporting-text="He/Him" />
        <template #trailing>
          <fn-icon-button>
            <info-outlined />
          </fn-icon-button>
        </template>
      </fn-list-item>
      <fn-divider component="li" variant="inset" no-margin />
      <fn-list-item align-items="flex-start">
        <template #leading="{ avatar }">
          <fn-avatar
            v-bind="avatar"
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
        </template>
        <fn-headline-text headline="Cindy Baker" supporting-text="She/Her" />
        <template #trailing>
          <fn-icon-button>
            <info-outlined />
          </fn-icon-button>
        </template>
      </fn-list-item>
    </fn-list>
  </div>
</template>
