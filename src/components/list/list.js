import store from '../../assets/js/store.js'

let methods = {
  saveTodo: function() {
    let todoKey = this.todoKey;
    store.set(todoKey, this.todoList);
  },
  saveComplete: function() {
    let completeKey = this.completeKey;
    store.set(completeKey, this.completeList);
  },
  saveListCount: function() {
    let todoKey = this.todoKey,
      len = this.todoList.length,
      listCollection = store.get('listCollection') || [];

    $.each(listCollection, function(index, item) {
      let _todoKey = 'todoList_' + item['key'];
      if (_todoKey === todoKey) {
        item['count'] = len;
      }
    });

    store.set('listCollection', listCollection);
  },
  add: function() {
    this.todoList.push({
      text: this.newTodo,
      removeStatus: false
    });

    this.saveTodo();
    this.saveListCount();
    this.newTodo = ''; //清空input
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

    this.saveTodo();
    this.saveComplete();
    this.saveListCount();
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
    store.remove('completeList');
    this.completeList = [];
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

    _t.saveTodo();
    _t.saveListCount();
  }
};

export default {
  data: function() {
    return {
      newTodo: '',
      completeState: false,
      completedTxt: '显示已完成任务',
      todoList: [],
      completeList: [],
      todoKey: '',
      completeKey: ''
    }
  },
  props: ['key'],
  methods: methods,
  ready: function() {
    this.$watch('key', function(newVal, oldVal) {
      this.todoKey = 'todoList_' + newVal;
      this.completeKey = 'completeList_' + newVal;

      let todoList = store.get(this.todoKey) || [];
      let completeList = store.get(this.completeKey) || [];

      this.todoList = todoList;
      this.completeList = completeList;
    });
  }
}
