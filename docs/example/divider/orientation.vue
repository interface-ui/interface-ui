<!-- eslint-disable quote-props -->
<script lang="ts" setup>
import { styled } from '@interface-ui/theme'
import FormatAlignCenter from '@interface-ui/icons/FormatAlignCenterFilled.js'
import FormatAlignLeft from '@interface-ui/icons/FormatAlignLeftFilled.js'
import FormatAlignRight from '@interface-ui/icons/FormatAlignRightFilled.js'
import FormatBold from '@interface-ui/icons/FormatBoldFilled.js'
import FormatItalic from '@interface-ui/icons/FormatItalicFilled.js'

const Box = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  border: 'var(--md-sys-color-outline-variant)',
  borderRadius: '4px',
  backgroundColor: 'var(--md-sys-color-surface-container)',
  color: 'var(--md-sys-color-on-surface)',
  '& .in-icon': {
    opacity: 0.75,
    margin: '12px',
    fontSize: '24px',
  },
})
</script>

<template>
  <box>
    <format-align-left />
    <format-align-center />
    <format-align-right />
    <in-divider orientation="vertical" />
    <format-bold />
    <format-italic />
  </box>

  <box>
    <format-align-left />
    <format-align-center />
    <format-align-right />
    <in-divider orientation="vertical" variant="inset" />
    <format-bold />
    <format-italic />
  </box>
</template>
