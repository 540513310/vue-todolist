import store from '../../assets/js/store.js'

let methods = {
  saveCollection: function() {
    store.set('collections', this.collections);
  },
  showCompleted: function() {
    this.completeState = !this.completeState;
    if (this.completeState) {
      this.completedTxt = '已完成任务';
    } else {
      this.completedTxt = '显示已完成任务';
    }
  },

  clearCompleted: function() {
    this.itemData['completeList'] = [];
    this.completeList = [];
    this.saveCollection();
  }
};

export default {
  data: function() {
    return {
      completeState: false,
      completedTxt: '显示已完成任务',
      completeList: []
    }
  },
  props: ['itemData', 'collections'],
  methods: methods,
  ready: function() {
    this.$watch('itemData', function(newVal, oldVal) {
      this.completeList = newVal.completeList;
    })
  }
}
