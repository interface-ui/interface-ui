<script lang="ts" setup>
// import '@core/avatar/src/index.less'
import '@core/badge/src/index.less'
import { InAvatar, InBadge, InButton } from '@core'
import { styled } from '@interface-ui/theme'

const StyledBadge = styled(InBadge)(theme => ({
  '& .in-badge--content': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.schemes.background}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))

const SmallAvatar = styled(InAvatar, {
  src: 'https://mui.com/static/images/avatar/2.jpg',
  size: 22,
})(theme => ({
  border: `2px solid ${theme.schemes.background}`,
  transform: 'translate(30%, 30%)',
}))
</script>

<template>
  <div class="content">
    <in-badge variant="dot">
      <in-button shape="rounded">Dot</in-button>
    </in-badge>
    <in-badge content="10">
      <in-button shape="rounded">Hello</in-button>
    </in-badge>
    <!-- <in-badge content="6">
      <in-icon icon="mdi:bell" :color="theme => theme.colors.grey[500]" />
    </in-badge> -->
  </div>
  <div class="content">
    <styled-badge variant="dot" y-align="bottom" overlap>
      <in-avatar src="https://mui.com/static/images/avatar/1.jpg" />
    </styled-badge>
    <in-badge :content="SmallAvatar" y-align="bottom">
      <in-avatar src="https://mui.com/static/images/avatar/1.jpg" />
    </in-badge>
  </div>
</template>
