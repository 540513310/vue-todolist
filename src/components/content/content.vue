<template>
  <ul class="content-wrap">
    <li class="mailbox item" v-link="{name: 'mailbox', params: { userId: 0 }, query: {title: '收件箱', key: '0'}}">
      <i class="item-icon icon-mailbox"></i>
      <span class="item-txt">收件箱</span>
      <span class="item-num">{{boxNum}}</span>
    </li>
    <li>
      <ul class="new-list" v-for="item in listCollection">
        <li class="list">
          <span class="removeBtn" :class="{'active': item.removeStatus}" v-touch:tap="deleteItem($index)">删除</span>
          <div class="item"  :class="{'remove': item.removeStatus}"
            v-touch:swipeleft="hideDelete($index)"
            v-touch:swiperight="showDelete($index)"
            v-link="{name: 'mailbox', params: { userId: $index + 1 }, query: {title: item.name, key: item.key}}">
            <i class="item-icon icon-newList"></i>
            <span class="item-txt">{{item.name}}</span>
            <span class="item-num">{{item.count}}</span>
          </div>
        </li>
      </ul>
    </li>
    <li class="create-list item" v-touch:tap="showLayer">
      <i class="item-icon icon-creat"></i>
      <span class="item-txt">创建清单</span>
    </li>
  </ul>
  <!-- <div class="create" v-touch:tap="showEdit"></div> -->
  <!-- <edit :edit-status.sync="editStatus"></edit> -->
  <layer :layer-status.sync="layerStatus" :list-collection.sync="listCollection"></layer>
</template>

<style lang="scss" src="./content.scss" scoped></style>

<script src="./content.js"></script>
