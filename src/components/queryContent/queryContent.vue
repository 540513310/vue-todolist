<template>
  <header class="nav-header">
    <img src="../../assets/img/arrow-left.png" class="icon-left" v-touch:tap="back">
    <input type="text" class="ipt-query" placeholder="搜索...">
  </header>
  <div class="query-content">
    <div class="query-item" v-for="listItem in queryList">
      <div class="item-title">{{listItem.list}}</div>
      <ul v-for="item in listItem.todoList">
        <li class="list-item" v-for="item in todoList">
          <span class="removeBtn" :class="{'active': item.removeStatus}" v-touch:tap="deleteItem($index)">删除</span>
          <div class="item" :class="{'remove': item.removeStatus}"
            v-touch:swipeleft="hideDelete($index)"
            v-touch:swiperight="showDelete($index)">
            <i class="icon-select unselect" v-touch:tap="complete($index)"></i>
            <span class="item-txt">{{item.text}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" src="./queryContent.scss" scoped></style>

<script src="./queryContent.js"></script>
