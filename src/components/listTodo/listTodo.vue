<template>
  <ul class="todo-ul">
    <li class="list-item" v-for="item in todoList" v-if="item.queryStatus | showQuery listType">
      <span class="removeBtn" :class="{'active': item.removeStatus}" v-touch:tap="deleteItem($index)">删除</span>
      <div class="item" :class="{'remove': item.removeStatus}"
        v-touch:swipeleft="hideDelete($index)"
        v-touch:swiperight="showDelete($index)">
        <i class="icon-select unselect" v-touch:tap="complete($index)"></i>
        <span class="item-txt">{{item.text}}</span>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" src="./listTodo.scss" scoped></style>

<script src="./listTodo.js"></script>
