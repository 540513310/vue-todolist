<template>
  <ul class="content-wrap">
    <li class="mailbox item" v-link="{name: 'mailbox', params: { userId: 0 }, query: {title: '收件箱', key: '0'}}">
      <i class="item-icon icon-mailbox"></i>
      <span class="item-txt">收件箱</span>
      <span class="item-num">{{defaultNum}}</span>
    </li>
    <li>
      <ul class="new-list" v-for="item in collections">
        <li class="list" v-if="!item.defaultList">
          <span class="removeBtn" :class="{'active': item.removeStatus}" v-touch:tap="showDeleteLayer($index)">删除</span>
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
  <layer :layer-status.sync="layerStatus"
    :layer-message.sync="layerMessage"
    :new-val.sync="newVal"></layer>
  <message :delete-status.sync="deleteStatus"></message>
</template>

<style lang="scss" src="./content.scss" scoped></style>

<script src="./content.js"></script>
