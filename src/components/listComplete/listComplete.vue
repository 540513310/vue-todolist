<template>
  <div class="completed" v-touch:tap="showCompleted">{{completedTxt}}</div>
  <ul class="completed-ul" v-show="completeState">
    <li class="list-item" v-for="item in completeList">
      <i class="icon-select selected"></i>
      <div class="item-txt completed-txt">{{item.text}}</div>
    </li>
  </ul>
  <div class="completed-clear" v-touch:tap="clearCompleted" v-show="completeState">清空已完成任务</div>
</template>

<style lang="scss" src="./listComplete.scss" scoped></style>

<script src="./listComplete.js"></script>
