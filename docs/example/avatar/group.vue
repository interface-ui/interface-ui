<template>
  <div fscw gap-5 flex-col>
    <fn-avatar-group max="3" size="50">
      <fn-avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
      />
      <fn-avatar
        alt="Travis Howard"
        src="https://mui.com/static/images/avatar/2.jpg"
      />
      <fn-avatar
        alt="Cindy Baker"
        src="https://mui.com/static/images/avatar/3.jpg"
      />
      <fn-avatar
        alt="Agnes Walker"
        src="https://mui.com/static/images/avatar/4.jpg"
      />
      <fn-avatar
        alt="Trevor Henderson"
        src="https://mui.com/static/images/avatar/5.jpg"
      />
    </fn-avatar-group>
    <fn-avatar-group
      :background="theme => theme.colors.grey[600]"
      color="white"
    >
      <fn-avatar>A</fn-avatar>
      <fn-avatar>B</fn-avatar>
      <fn-avatar>C</fn-avatar>
    </fn-avatar-group>
  </div>
</template>
