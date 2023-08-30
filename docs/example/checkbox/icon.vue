<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-checkbox color="#6366f1">
        <template #icon="{ icon }">
          <fn-icon
            v-show="icon.checked"
            :size="icon.size"
            :color="icon.color"
            icon="material-symbols:star"
          />
          <fn-icon
            v-show="!icon.checked"
            :size="icon.size"
            :color="icon.color"
            icon="material-symbols:star-outline"
          />
        </template>
      </fn-checkbox>
      <fn-checkbox color="#f59e0b">
        <template #icon="{ icon }">
          <fn-icon
            v-show="icon.checked"
            :size="icon.size"
            :color="icon.color"
            icon="material-symbols:bedtime"
          />
          <fn-icon
            v-show="!icon.checked"
            :size="icon.size"
            :color="icon.color"
            icon="material-symbols:bedtime-outline"
          />
        </template>
      </fn-checkbox>
    </div>
  </div>
</template>
