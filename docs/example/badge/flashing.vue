<template>
  <div space-y-2>
    <div fscw gap-10>
      <fn-badge dot flashing color="deeppink">
        <fn-icon icon="fluent-emoji-flat:astonished-face" size="30" />
      </fn-badge>
      <fn-badge dot flashing>
        <FnButton>
          Hello
        </FnButton>
      </fn-badge>
      <fn-badge :value="996" flashing color="purple">
        <FnButton>
          Hello
        </FnButton>
      </fn-badge>
    </div>
  </div>
</template>
