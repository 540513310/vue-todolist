<template>
  <div class="edit-layer">
    <div class="edit-content">
      <textarea class="edit-area" placeholder="在收件箱中添加一个任务..."></textarea>
      <div class="edit-footer" v-bind:style="{ height: footerHeight + 'px' }">
        <div class="mession-select"></div>
        <div class="btn-wrap">
          <button class="cancel">取消</button>
          <button class="add">添加</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./edit.scss" scoped></style>

<script src="./edit.js"></script>
