import store from '../../assets/js/store.js'
import listTodo from '../listTodo/listTodo.vue'
import listComplete from '../listComplete/listComplete.vue'

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
  components: {
    'list-todo': listTodo,
    'list-complete': listComplete
  },
  ready: function() {
    this.$watch('key', function(newVal, oldVal) {
      this.initItemData(newVal);
    });

    this.$on('list_saveCollection', function() {
      this.saveCollection();
    });
  }
}
