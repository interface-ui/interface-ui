<!-- eslint-disable quote-props -->
<script lang="ts" setup>
import { InAvatar, InBadge } from '@interface-ui/core'
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
})`
  border: 2px solid var(--md-sys-color-background);
  transform: translate(30%, 30%);
`
</script>

<template>
  <styled-badge variant="dot" y-align="bottom" overlap>
    <in-avatar src="https://mui.com/static/images/avatar/1.jpg" />
  </styled-badge>
  <in-badge :content="SmallAvatar" y-align="bottom">
    <in-avatar src="https://mui.com/static/images/avatar/1.jpg" />
  </in-badge>
</template>
