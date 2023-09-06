<template>
  <fn-breadcrumb separator="/">
    <fn-breadcrumb-item :to="{ path: '/' }">
      home
    </fn-breadcrumb-item>
    <fn-breadcrumb-item>
      <a href="/">fusion ui</a>
    </fn-breadcrumb-item>
    <fn-breadcrumb-item to="/">
      toHome
    </fn-breadcrumb-item>
    <fn-breadcrumb-item>
      details
    </fn-breadcrumb-item>
  </fn-breadcrumb>
</template>
