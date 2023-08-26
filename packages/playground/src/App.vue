<script setup lang="ts">
import TableRender from './components/table.vue'
import { ref } from 'vue'
const button = ref('晚上')
const tableData =ref( [
  {
    date: '2016-05-03',
    name: 'Tom1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom2',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom3',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom4',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
)
const changTheme = () => {
  const html = document.documentElement
  if (html.classList.contains('dark')) {
    button.value = '白天'
    html.classList.remove('dark')
    html.setAttribute('data-theme', 'light')
  }
  else {
    html.classList.remove('light')
    html.classList.add('dark')
    button.value = '晚上'
    html.setAttribute('data-theme', 'dark')
  }
}


</script>

<template>
    <fn-avatar-group total="30" max="3">
     
      <fnAvatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
      />
      <fnAvatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/2.jpg"
      />
      <fnAvatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/3.jpg"
      />
      <fnAvatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/4.jpg"
      />
      <fnAvatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/5.jpg"
      />
    </fn-avatar-group>
  <br>
<!-- <fnAvatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/3.jpg"
      />
      <fnAvatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/4.jpg"
      />
      <fnAvatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/5.jpg"
      /> -->
   <fn-avatar
        src="https://img1.baidu.com/it/u=909111604,4171820012&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=659"
        size="small"
      />
      <fn-avatar
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        size="default"
      />
      <fn-avatar
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        size="large"
      />

       
      <fn-avatar type="primary"   width="100"  height="100" background="red" color="blue"> A </fn-avatar>
  <br>
      <fn-button @click="changTheme">
        {{ button }}
      </fn-button>
     
</template>

<style scoped>
.content{
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
</style>
