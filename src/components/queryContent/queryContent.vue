<template>
  <div class="query-content">
    <div class="query-item" v-for="itemData in collections">
      <div class="item-content" v-if="itemData.showQuery">
        <div class="item-title">{{itemData.name}}</div>
        <list-todo
        :item-data="itemData"
        :collections="collections"
        :list-type="listType"></list-todo>
         <!--    <ul class="todo-ul" v-for="item in itemData.todoList">
            <li class="list-item" v-if="item.queryStatus">
                <span class="removeBtn" :class="{'active': item.removeStatus}" v-touch:tap="deleteItem($index)">删除</span>
                <div class="item" :class="{'remove': item.removeStatus}"
                  v-touch:swipeleft="hideDelete($index)"
                  v-touch:swiperight="showDelete($index)">
                  <i class="icon-select unselect" v-touch:tap="complete($index)"></i>
                  <span class="item-txt">{{item.text}}</span>
                </div>
            </li>
          </ul> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./queryContent.scss" scoped></style>

<script src="./queryContent.js"></script>
