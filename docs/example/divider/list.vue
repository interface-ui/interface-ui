<template>
  <div style="width: 320px">
    <in-list :selectable="false">
      <in-list-item>
        <in-headline-text headline="Ullamco consectetur." />
      </in-list-item>
      <in-divider component="li" no-margin />
      <in-list-item>
        <in-headline-text
          headline="In officia cupidatat!"
          supporting-text="Officia qui ea ex dolor."
        />
      </in-list-item>
      <in-divider component="li" no-margin />
      <in-list-item align-items="flex-start">
        <in-headline-text
          headline="Brunch this weekend?"
          supporting-text="Ali Connors — I'll be in your neighborhood doing errands this…"
        />
      </in-list-item>
    </in-list>
  </div>
</template>
