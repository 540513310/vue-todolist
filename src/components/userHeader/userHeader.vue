<template>
  <header class="nav-title clearfix">
    <div class="mod-left" v-touch:tap="showEditName">
      <span class="avatar">{{firstName}}</span>
      <span class="avatar-name">{{name}}</span>
    </div>
    <div class="mod-right clearfix">
      <img src="../../assets/img/query.png" class="query">
    </div>
  </header>
  <layer
    :layer-status.sync="layerStatus"
    :layer-message.sync="layerMessage"
    :new-val.sync="newVal"></layer>
</template>

<style lang="scss" src="./userHeader.scss" scoped></style>

<script src="./userHeader.js"></script>
