<template>
  <in-button-group variant="elevated" color="error" size="small">
    <in-button>Left</in-button>
    <in-button>Error</in-button>
    <in-button>Right</in-button>
  </in-button-group>
  <in-button-group variant="elevated" :color="theme => theme.colors.green[400]">
    <in-button>Left</in-button>
    <in-button>Green</in-button>
    <in-button>Right</in-button>
  </in-button-group>
  <in-button-group variant="elevated" color="info" size="large">
    <in-button>Left</in-button>
    <in-button>Info</in-button>
    <in-button>Right</in-button>
  </in-button-group>
</template>
