<template>
  <div flex gap-5>
    <in-chip color="primary"> Primary </in-chip>
    <in-chip color="info"> Info </in-chip>
    <in-chip color="success"> Success </in-chip>
    <in-chip :color="theme => theme.colors.cyan[400]"> Cyan </in-chip>
  </div>
  <div flex gap-5>
    <in-chip variant="outlined" color="primary"> Primary </in-chip>
    <in-chip variant="outlined" color="info"> Info </in-chip>
    <in-chip variant="outlined" color="success"> Success </in-chip>
    <in-chip variant="outlined" :color="theme => theme.colors.cyan[400]">
      Cyan
    </in-chip>
  </div>
</template>
