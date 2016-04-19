var model = {
  set: function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: function(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  remove: function(key) {
    localStorage.removeItem(key);
  },
  clearAll: function() {
    localStorage.clear();
  }
};

var methods = {
  add: function() {
    this.todoList.push({
      text: this.newTodo
    });
    model.set('todoList', this.todoList);
  },
  complete: function($index) {
    var todoList = this.todoList,
      completeList = this.completeList;
    $.each(todoList, function(index, item) {
      if (+$index === index) {
        var complete = todoList.splice(index, 1)[0];
        completeList.push(complete);
      }
    });
    model.set('completeList', this.completeList);
    model.set('todoList', this.todoList);
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
    model.remove('completeList');
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
      completeList: []
    }
  },
  methods: methods,
  ready: function() {
    var todoList = model.get('todoList') || [],
      completeList = model.get('completeList') || [];
    // console.log(todoList, completeList);
    this.todoList = todoList;
    this.completeList = completeList;
  }
}
