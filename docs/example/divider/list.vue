<template>
  <div style="width: 320px">
    <fn-list :selectable="false">
      <fn-list-item>
        <fn-headline-text headline="Ullamco consectetur." />
      </fn-list-item>
      <fn-divider component="li" no-margin />
      <fn-list-item>
        <fn-headline-text
          headline="In officia cupidatat!"
          supporting-text="Officia qui ea ex dolor."
        />
      </fn-list-item>
      <fn-divider component="li" no-margin />
      <fn-list-item align-items="flex-start">
        <fn-headline-text
          headline="Brunch this weekend?"
          supporting-text="Ali Connors — I'll be in your neighborhood doing errands this…"
        />
      </fn-list-item>
    </fn-list>
  </div>
</template>
