import create from '../create/create.vue'
import edit from '../edit/edit.vue'
import layer from '../layer/layer.vue'
import store from '../../assets/js/store.js'

var methods = {
  showEdit: function() {
    this.editStatus = true;
  },
  showLayer: function() {
    this.layerStatus = true;
  },
  showDelete: function(index) {
    let _index = index;
    $.each(this.listCollection, function(index, item) {
      if (_index === index) {
        item['removeStatus'] = true
      }
    })
  },
  hideDelete: function(index) {
    let _index = index;
    $.each(this.listCollection, function(index, item) {
      if (_index === index) {
        item['removeStatus'] = false
      }
    })
  },
  deleteItem: function(index) {
    this.removeListItem(index);
    this.removeItemData(index);
  },
  removeListItem: function(index) {
    let _t = this,
      _index = index;
    $.each(_t.listCollection, function(index, item) {
      if (_index === index) {
        _t.listCollection.splice(index, 1);
      }
    });
    store.set('listCollection', _t.listCollection);
  },
  removeItemData: function(index) {
    let todoKey = 'todoList_' + (index + 1),
      completeKey = 'completeList_' + (index + 1);

    store.remove(todoKey);
    store.remove(completeKey);
  },
  initNum: function() {
    this.boxNum = store.get('todoList_0') ? store.get('todoList_0').length : '0';
  },
  initList: function() {
    this.listCollection = store.get('listCollection') || [];
  }
};

export default {
  data: function() {
    return {
      editStatus: false,
      layerStatus: false,
      leftStatus: false,
      boxNum: '',
      listCollection: [],
      numList: []
    }
  },
  methods: methods,
  components: {
    create: create,
    edit: edit,
    layer: layer
  },
  ready: function() {
    this.initList();
    this.initNum();
  }
}
