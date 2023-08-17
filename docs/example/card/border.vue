<template>
  <fn-card title="header" :border="false">
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
