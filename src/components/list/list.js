import store from '../../assets/js/store.js'

let methods = {
  add: function() {
    let todoKey = this.todoKey;
    this.todoList.push({
      text: this.newTodo
    });

    store.set(key, this.todoList);
    this.newTodo = ''; //清空input
  },
  complete: function($index) {
    let todoList = this.todoList,
      completeList = this.completeList;
    let todoKey = this.todoKey,
      completeKey = this.completeKey;

    $.each(todoList, function(index, item) {
      if (+$index === index) {
        let complete = todoList.splice(index, 1)[0];
        completeList.push(complete);
      }
    });

    store.set(completeKey, this.completeList);
    store.set(todoKey, this.todoList);
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
