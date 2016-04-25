<template>
  <div class="query-content">
    <div class="query-item" v-for="itemData in collections">
      <div class="item-title" v-if="itemData.showQuery">{{itemData.name}}</div>
      <list-todo :item-data="itemData" v-if="itemData.showQuery"></list-todo>
    </div>
  </div>
</template>

<style lang="scss" src="./queryContent.scss" scoped></style>

<script src="./queryContent.js"></script>
