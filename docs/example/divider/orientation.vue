<!-- eslint-disable quote-props -->
<script lang="ts" setup>
import { styled } from '@interface-ui/theme'
import FormatAlignCenter from '@interface-ui/icons/FormatAlignCenterFilled'
import FormatAlignLeft from '@interface-ui/icons/FormatAlignLeftFilled'
import FormatAlignRight from '@interface-ui/icons/FormatAlignRightFilled'
import FormatBold from '@interface-ui/icons/FormatBoldFilled'
import FormatItalic from '@interface-ui/icons/FormatItalicFilled'

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
