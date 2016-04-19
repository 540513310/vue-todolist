<template>
  <div class="list-wrap">
    <div class="input-wrap">
      <i class="icon-add"></i>
      <input type="text" class="list-input" placeholder="添加任务..." v-on:keyup.enter="add" v-model="newTodo">
    </div>
    <ul class="todo-ul">
      <li class="list-item" v-for="item in todoList">
        <i class="icon-select unselect" v-on:click="complete($index)"></i>
        <div class="item-txt">{{item.text}}</div>
      </li>
    </ul>
    <div class="completed" v-on:click="showCompleted">{{completedTxt}}</div>
    <ul class="completed-ul" v-show="completeState">
      <li class="list-item" v-for="item in completeList">
        <i class="icon-select selected" v-on:click="complete($index)"></i>
        <div class="item-txt completed-txt">{{item.text}}</div>
      </li>
    </ul>
    <div class="completed-clear" v-on:click="clearCompleted" v-show="completeState">清空已完成任务</div>
  </div>
</template>

<style lang="scss" src="./list.scss" scoped></style>

<script src="./list.js"></script>
