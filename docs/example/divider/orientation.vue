<!-- eslint-disable quote-props -->
<script lang="ts" setup>
import { styled } from '@fusion-ui-vue/theme'
import * as pkg from 'fusion-ui-iconify'

const Box = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  border: 'var(--md-sys-color-outline-variant)',
  borderRadius: '4px',
  backgroundColor: 'var(--md-sys-color-surface-container)',
  color: 'var(--md-sys-color-on-surface)',
  '& .fn-icon': {
    opacity: 0.75,
    margin: '12px',
    fontSize: '24px',
  },
})

const {
  FormatAlignLeftFilled,
  FormatAlignCenterFilled,
  FormatAlignRightFilled,
  FormatBoldFilled,
  FormatItalicFilled,
} = pkg
</script>

<template>
  <box>
    <format-align-left-filled />
    <format-align-center-filled />
    <format-align-right-filled />
    <fn-divider orientation="vertical" />
    <format-bold-filled />
    <format-italic-filled />
  </box>

  <box>
    <format-align-left-filled />
    <format-align-center-filled />
    <format-align-right-filled />
    <fn-divider orientation="vertical" variant="inset" />
    <format-bold-filled />
    <format-italic-filled />
  </box>
</template>
