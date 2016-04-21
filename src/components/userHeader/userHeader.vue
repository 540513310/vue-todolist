<template>
  <header class="nav-title clearfix">
    <div class="mod-left" v-touch:tap="changeName">
      <span class="avatar">{{firstName}}</span>
      <span class="avatar-name">{{name}}</span>
    </div>
    <div class="mod-right clearfix">
      <!-- <img src="../../assets/img/message.png" class="message"> -->
      <img src="../../assets/img/query.png" class="query">
    </div>
  </header>
  <div class="changeName"></div>
</template>

<style lang="scss" src="./userHeader.scss" scoped></style>

<script src="./userHeader.js"></script>
