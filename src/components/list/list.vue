<template>
  <div class="list-wrap">
    <div class="input-wrap">
      <i class="icon-add"></i>
      <input type="text" class="list-input" placeholder="添加任务..." v-on:keyup.enter="add" v-model="newTodo">
    </div>
    <ul>
      <li class="list-item" v-for="item in todoList">
        <i class="icon-select unselect" v-on:click="complete($index)"></i>
        <div class="item-txt">{{item.text}}</div>
      </li>
    </ul>
    <div class="completed">显示已完成任务</div>
    <ul>
      <li class="list-item" v-for="item in completeList">
        <i class="icon-select selected" v-on:click="complete($index)"></i>
        <div class="item-txt completed-txt">{{item.text}}</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" src="./list.scss" scoped></style>

<script src="./list.js"></script>
