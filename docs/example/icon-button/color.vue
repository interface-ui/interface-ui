<script lang="ts" setup>
import Fingerprint from '@interface-ui/icons/FingerprintFilled'
</script>

<template>
  <in-icon-button>
    <fingerprint />
  </in-icon-button>
  <in-icon-button color="tertiary">
    <fingerprint />
  </in-icon-button>
  <in-icon-button color="error">
    <fingerprint />
  </in-icon-button>
  <in-icon-button :color="theme => theme.colors.cyan[400]">
    <fingerprint />
  </in-icon-button>
  <in-icon-button color="#2E7D32">
    <fingerprint />
  </in-icon-button>
</template>
