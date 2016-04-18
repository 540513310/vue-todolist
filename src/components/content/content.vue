<template>
  <ul class="content-wrap">
    <li class="mailbox item" v-link="{ path: '/mailbox' }">
      <img src="../../assets/img/mailbox.png" class="item-icon">
      <span class="item-txt">收件箱</span>
      <span class="item-num">1</span>
    </li>
    <li class="list item">
      <img src="../../assets/img/plan.png" class="item-icon">
      <span class="item-txt">每周计划</span>
      <span class="item-num">1</span>
    </li>
    <li class="create-list item">
      <img src="../../assets/img/create.png" class="item-icon">
      <span class="item-txt">创建清单</span>
    </li>
  </ul>
  <div class="create" v-touch:tap="tap"></div>
  <edit :show-edit.sync="showEdit"></edit>
</template>

<style lang="scss" src="./content.scss" scoped></style>

<script src="./content.js"></script>
