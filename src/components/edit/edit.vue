<template>
  <div class="edit-layer" v-show="showEdit">
    <div class="edit-content">
      <textarea class="edit-area" placeholder="在收件箱中添加一个任务..."></textarea>
      <div class="edit-footer">
        <ul class="mession-select">
          <li>
            <img src="../../assets/img/mailbox-black.png" class="select-icon">
            <span class="select-txt">收件箱</span>
            <img src="../../assets/img/icon-down.png" alt="" class="select-down">
          </li>
        </ul>
        <div class="btn-wrap">
          <button class="cancel" @click="cancel">取消</button>
          <button class="add">添加</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./edit.scss" scoped></style>

<script src="./edit.js"></script>
