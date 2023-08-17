<template>
  <fn-card title="Card Header" background="rgba(98, 172, 250, 0.5)">
    <div v-for="(item, index) in 4" :key="index" class="item">
      content {{ item }}
    </div>
  </fn-card>
</template>

<style scoped>
.item {
  margin: 8px 0;
}
</style>
