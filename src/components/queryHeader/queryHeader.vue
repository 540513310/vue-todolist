<template>
  <header class="nav-header">
    <img src="../../assets/img/arrow-left.png" class="icon-left" v-touch:tap="back">
    <input type="text" class="ipt-query" placeholder="搜索...">
  </header>
</template>

<style lang="scss" src="./queryHeader.scss" scoped></style>

<script src="./queryHeader.js"></script>
