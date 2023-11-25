<script lang="ts" setup></script>

<template>
  <div style="width: 320px">
    <fn-list :selectable="false">
      <fn-list-item>
        <template #leading="{ avatar }">
          <fn-avatar v-bind="avatar">A</fn-avatar>
        </template>
        <fn-headline-text headline="Ullamco consectetur." />
      </fn-list-item>
      <fn-list-item selectable>
        <template #leading="{ avatar }">
          <fn-avatar v-bind="avatar">B</fn-avatar>
        </template>
        <fn-headline-text
          headline="In officia cupidatat!"
          supporting-text="Officia qui ea ex dolor."
        />
      </fn-list-item>
      <fn-list-item align-items="flex-start">
        <template #leading="{ avatar }">
          <fn-avatar v-bind="avatar">C</fn-avatar>
        </template>
        <fn-headline-text
          headline="Brunch this weekend?"
          supporting-text="Ali Connors — I'll be in your neighborhood doing errands this…"
        />
      </fn-list-item>
    </fn-list>
  </div>
</template>
