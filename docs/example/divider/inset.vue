<script lang="ts" setup>
import Info from '@interface-ui/icons/InfoOutlined'
</script>

<template>
  <div style="width: 320px">
    <in-list :selectable="false">
      <in-list-item>
        <template #leading="{ avatar }">
          <in-avatar
            v-bind="avatar"
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        </template>
        <in-headline-text headline="Remy Sharp" supporting-text="He/Him" />
        <template #trailing>
          <in-icon-button>
            <info />
          </in-icon-button>
        </template>
      </in-list-item>
      <in-divider component="li" variant="inset" no-margin />
      <in-list-item>
        <template #leading="{ avatar }">
          <in-avatar
            v-bind="avatar"
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        </template>
        <in-headline-text headline="Travis Howard" supporting-text="He/Him" />
        <template #trailing>
          <in-icon-button>
            <info />
          </in-icon-button>
        </template>
      </in-list-item>
      <in-divider component="li" variant="inset" no-margin />
      <in-list-item align-items="flex-start">
        <template #leading="{ avatar }">
          <in-avatar
            v-bind="avatar"
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
        </template>
        <in-headline-text headline="Cindy Baker" supporting-text="She/Her" />
        <template #trailing>
          <in-icon-button>
            <info />
          </in-icon-button>
        </template>
      </in-list-item>
    </in-list>
  </div>
</template>
