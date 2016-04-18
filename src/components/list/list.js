var methods = {
  add: function() {
    this.todoList.push({
      text: this.newTodo
    });
    console.log(this.todoList);
  },
  complete: function($index) {
    var todoList = this.todoList,
      completeList = this.completeList;
    $.each(todoList, function(index, item) {
      if (+$index === index) {
        var complete = todoList.splice(index, 1)[0];
        console.log(complete);
        completeList.push(complete);
      }
    })
  }
}
export default {
  data: function() {
    return {
      newTodo: '',
      todoList: [],
      completeList: []
    }
  },
  methods: methods
}
