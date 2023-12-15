<script lang="ts" setup>
import { InSvgIcon } from '@interface-ui/components'
</script>

<template>
  <in-svg-icon
    :color="theme => theme.schemes.primary"
    size="30"
    cs="& polygon {fill: currentColor;}"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 128.55 111.33"
      strokeWidth="{1.5}"
      stroke="currentColor"
    >
      <g>
        <g>
          <polygon points="73.5 0 64.23 16.06 119.28 16.06 128.55 0 73.5 0" />
          <polygon points="18.54 0 0 0 9.27 16.06 27.82 16.06 18.54 0" />
          <polygon
            points="61.06 21.54 47.47 45.09 56.74 61.15 70.33 37.6 106.84 37.6 116.11 21.54 61.06 21.54"
          />
          <polygon
            points="55 95.27 64.27 111.33 105.39 40.1 86.85 40.1 55 95.27"
          />
          <polygon
            points="29.26 18.56 10.72 18.56 53.56 92.77 62.83 76.71 29.26 18.56"
          />
        </g>
      </g>
    </svg>
  </in-svg-icon>

  <in-svg-icon fill="#5cb685" size="30">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      stroke="currentColor"
    >
      <path
        d="M512 504L764.8 68.8h-134.4L512 275.2 393.6 70.4h-134.4L512 504zM819.2 70.4L512 600 204.8 68.8H0l512 886.4L1024 70.4H819.2z"
      />
    </svg>
  </in-svg-icon>
</template>
