<template>
  <div class="layer-wrap" v-show="layerStatus">
    <div class="layer-content">
      <h3 class="layer-title">{{layerMessage}}</h3>
      <input type="text" placeholder="{{layerMessage}}" class="layer-input" v-model="newVal">
      <div class="button-wrap clearfix">
        <button class="cancel" v-touch:tap="cancel">取消</button>
        <button class="commit" v-touch:tap="commit">确认</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./layer.scss" scoped></style>

<script src="./layer.js"></script>
