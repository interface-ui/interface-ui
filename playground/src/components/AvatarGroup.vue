<script lang="ts" setup>
import '@core/avatar/src/index.less'
import '@core/avatar-group/src/index.less'
import { InAvatar, InAvatarGroup } from '@core'
import Accessibility from '@interface-ui/icons/AccessibilityFilled'
import Autorenew from '@interface-ui/icons/AutorenewFilled'
import Book from '@interface-ui/icons/BookFilled'
</script>

<template>
  <div class="content">
    <in-avatar>A</in-avatar>
    <in-avatar :color="theme => theme.colors.cyan[200]"> B </in-avatar>
    <in-avatar color="#6435b4">OK</in-avatar>
    <in-avatar
      alt="Remy Sharp"
      src="https://mui.com/static/images/avatar/1.jpg"
    />
  </div>
  <div class="content">
    <in-avatar>
      <book />
    </in-avatar>
    <in-avatar :color="theme => theme.colors.pink[400]">
      <accessibility />
    </in-avatar>
    <in-avatar color="#60ae57">
      <autorenew />
    </in-avatar>
  </div>
  <in-avatar-group max="3" size="50">
    <in-avatar
      alt="Remy Sharp"
      src="https://mui.com/static/images/avatar/1.jpg"
    />
    <in-avatar
      alt="Travis Howard"
      src="https://mui.com/static/images/avatar/2.jpg"
    />
    <in-avatar
      alt="Cindy Baker"
      src="https://mui.com/static/images/avatar/3.jpg"
    />
    <in-avatar
      alt="Agnes Walker"
      src="https://mui.com/static/images/avatar/4.jpg"
    />
    <in-avatar
      alt="Trevor Henderson"
      src="https://mui.com/static/images/avatar/5.jpg"
    />
  </in-avatar-group>
  <!-- <in-avatar-group>
    <in-avatar
      alt="Remy Sharp"
      src="https://mui.com/static/images/avatar/1.jpg"
    />
    <in-avatar
      alt="Travis Howard"
      src="https://mui.com/static/images/avatar/2.jpg"
    />
    <in-avatar
      alt="Cindy Baker"
      src="https://mui.com/static/images/avatar/3.jpg"
    />
    <in-avatar
      alt="Agnes Walker"
      src="https://mui.com/static/images/avatar/4.jpg"
    />
    <in-avatar
      alt="Trevor Henderson"
      src="https://mui.com/static/images/avatar/5.jpg"
    />
  </in-avatar-group>
  <in-avatar-group>
    <in-avatar>A</in-avatar>
    <in-avatar>B</in-avatar>
    <in-avatar>C</in-avatar>
  </in-avatar-group> -->
</template>
