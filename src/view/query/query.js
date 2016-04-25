import queryHeader from '../../components/queryHeader/queryHeader.vue'
import queryContent from '../../components/queryContent/queryContent.vue'
import store from '../../assets/js/store.js'

let methods = {
  initQueryList: function() {
    let _t = this;
    this.collections = store.get('collections');

    $.each(this.collections, function(index, item) {
      let todoList = item.todoList;

      for (let i = todoList.length - 1; i >= 0; i--) {
        let text = todoList[i]['text'];
        if (text.indexOf(_t.title) !== -1 && _t.title.length !== 0) {
          item.todoList[i].queryStatus = true;
          item.showQuery = true;
        }
      }
    });
  },
  clearQueryCollection: function() {
    this.queryCollections = [];
  }
};

export default {
  components: {
    'query-header': queryHeader,
    'query-content': queryContent
  },
  data: function() {
    return {
      title: '',
      collections: [],
      queryCollections: []
    }
  },
  methods: methods,
  ready: function() {
    this.$on('query_toggleInput', function() {
      this.initQueryList();
    });
  }
}
