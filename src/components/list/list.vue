<template>
  <div class="list-wrap">
    <div class="input-wrap">
      <i class="icon-add"></i>
      <input type="text" class="list-input" placeholder="添加任务..." v-on:keyup.enter="add" v-model="newTodo">
    </div>
    <list-todo
      :item-data.sync="itemData"
      :collections.sync="collections"></list-todo>
    <list-complete
      :item-data.sync="itemData"
      :collections.sync="collections"></list-complete>
  </div>
</template>

<style lang="scss" src="./list.scss" scoped></style>

<script src="./list.js"></script>
