<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-checkbox color="#6366f1">
        <template #icon="{ icon }">
          <fn-icon
            :size="icon.size"
            :color="icon.color"
            name="material-symbols:star"
            v-show="icon.checked"
          />
          <fn-icon
            :size="icon.size"
            :color="icon.color"
            name="material-symbols:star-outline"
            v-show="!icon.checked"
          />
        </template>
      </fn-checkbox>
      <fn-checkbox color="#f59e0b">
        <template #icon="{ icon }">
          <fn-icon
            :size="icon.size"
            :color="icon.color"
            name="material-symbols:bedtime"
            v-show="icon.checked"
          />
          <fn-icon
            :size="icon.size"
            :color="icon.color"
            name="material-symbols:bedtime-outline"
            v-show="!icon.checked"
          />
        </template>
      </fn-checkbox>
    </div>
  </div>
</template>
