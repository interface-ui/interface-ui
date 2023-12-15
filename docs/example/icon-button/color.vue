<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
const { FingerprintFilled } = pkg
// import { FingerprintFilled } from 'fusion-ui-iconify'
</script>

<template>
  <in-icon-button>
    <fingerprint-filled />
  </in-icon-button>
  <in-icon-button color="secondary">
    <fingerprint-filled />
  </in-icon-button>
  <in-icon-button color="tertiary">
    <fingerprint-filled />
  </in-icon-button>
  <in-icon-button color="error">
    <fingerprint-filled />
  </in-icon-button>
  <in-icon-button :color="theme => theme.colors.cyan[400]">
    <fingerprint-filled />
  </in-icon-button>
  <in-icon-button color="#2E7D32">
    <fingerprint-filled />
  </in-icon-button>
</template>
