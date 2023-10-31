<script lang="ts" setup>
import { FingerprintFilled } from 'fusion-ui-iconify'
</script>

<template>
  <fn-icon-button>
    <fingerprint-filled />
  </fn-icon-button>
  <fn-icon-button color="secondary">
    <fingerprint-filled />
  </fn-icon-button>
  <fn-icon-button color="tertiary">
    <fingerprint-filled />
  </fn-icon-button>
  <fn-icon-button color="error">
    <fingerprint-filled />
  </fn-icon-button>
  <fn-icon-button :color="theme => theme.colors.cyan[400]">
    <fingerprint-filled />
  </fn-icon-button>
  <fn-icon-button color="#2E7D32">
    <fingerprint-filled />
  </fn-icon-button>
</template>
