import store from '../../assets/js/store.js'
import listTodo from '../listTodo/listTodo.vue'

let methods = {
  initItemData: function() {
    var _t = this;
    $.each(this.collections, function(index, item) {
      if (item.showQuery) {
        _t.itemData = item;
      }
    });
  }
};

export default {
  data: function() {
    return {
      'itemData': ''
    }
  },
  props: ['collections'],
  methods: methods,
  components: {
    'list-todo': listTodo
  },
  ready: function() {
    // this.initItemData();
  }
}
