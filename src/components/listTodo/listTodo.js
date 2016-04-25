import store from '../../assets/js/store.js'

let methods = {
  saveCollection: function() {
    store.set('collections', this.collections);
  },
  showDelete: function(index) {
    this.toggleDelete(index, true);
  },
  hideDelete: function(index) {
    this.toggleDelete(index, false);
  },
  toggleDelete: function(index, status) {
    var _t = this,
      _index = index;

    $.each(_t.todoList, function(index, item) {
      if (+_index === index) {
        item['removeStatus'] = status;
      }
    })
  },
  deleteItem: function(index) {
    var _t = this,
      _index = index;

    $.each(_t.todoList, function(index, item) {
      if (+_index === index) {
        _t.todoList.splice(index, 1)[0];
      }
    });

    this.saveCollection();
  },
  complete: function($index) {
    let todoList = this.todoList,
      completeList = this.completeList;

    $.each(todoList, function(index, item) {
      if (+$index === index) {
        let complete = todoList.splice(index, 1)[0];
        completeList.push(complete);
      }
    });

    this.itemData['count'] = this.todoList.length; //更新count
    this.saveCollection();
  }
};

export default {
  data: function() {
    return {
      todoList: [],
      completeList: []
    }
  },
  props: ['itemData', 'collections'],
  methods: methods,
  ready: function() {
    // this.$log('itemData');
    // console.log(this.itemData);

    this.$watch('itemData', function(newVal, oldVal) {
      console.log(newVal);
      this.todoList = newVal.todoList;
      this.completeList = newVal.completeList;
    })
  }
}
