import store from '../../assets/js/store.js'

let methods = {
  saveCollection: function() {
    store.set('collections', this.collections);
  },
  add: function() {
    this.todoList.push({
      text: this.newTodo,
      removeStatus: false
    }); //更新todolist

    this.newTodo = ''; //清空input
    this.itemData['count'] = this.todoList.length; //更新count
    this.saveCollection();

    this.$log('itemData');
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

    this.$log('itemData');
    this.saveCollection();
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

    _t.saveCollection();
  },
  initItemData: function(key) {
    var _t = this;
    this.collections = store.get('collections');
    $.each(this.collections, function(index, item) {
      if (+item['key'] === +key) {
        _t.itemData = item;
      }
    })

    this.todoList = this.itemData['todoList'];
    this.completeList = this.itemData['completeList'];
    this.$log('itemData');
  }
};

export default {
  data: function() {
    return {
      newTodo: '',
      completeState: false,
      completedTxt: '显示已完成任务',
      count: '',
      itemData: '',
      todoList: [],
      completeList: [],
      collections: []
    }
  },
  props: ['key'],
  methods: methods,
  ready: function() {
    this.$watch('key', function(newVal, oldVal) {
      this.initItemData(newVal);
    });
  }
}
