<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-tag
        v-for="tag in dynamicTags"
        :key="tag"
        closable
        @close="handleClose(tag)"
      >
        {{ tag }}
      </fn-tag>
      <fn-button size="small" @click="addTag"> + New Tag </fn-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from "vue"

let inputValue = 4;
const dynamicTags = ref(["Tag 1", "Tag 2", "Tag 3"]);

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
}

const addTag = (tag:string)=>{
  dynamicTags.value.push(`Tag${inputValue}`);
  inputValue++;
}
</script>

