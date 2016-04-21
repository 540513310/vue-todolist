import create from '../create/create.vue'
import edit from '../edit/edit.vue'
import layer from '../layer/layer.vue'
import message from '../message/message.vue'
import store from '../../assets/js/store.js'

var methods = {
  showEdit: function() {
    this.editStatus = true;
  },
  showLayer: function() {
    this.layerStatus = true;
  },
  showDelete: function(index) {
    console.log(index);
    this.toggleDelete(index, true);
  },
  hideDelete: function(index) {
    this.toggleDelete(index, false);
  },
  toggleDelete: function(index, status) {
    let _index = index;
    $.each(this.listCollection, function(index, item) {
      if (_index === index) {
        item['removeStatus'] = status;
      }
    })
  },
  showDeleteLayer: function(index) {
    this.deleteStatus = true;
    this.deleteIndex = index;
  },
  removeListItem: function() {
    let _t = this,
      _index = this.deleteIndex;

    $.each(_t.listCollection, function(index, item) {
      if (_index === index) {
        var removeList = _t.listCollection.splice(index, 1)[0];
        _t.deletKey = removeList['key'];
      }
    })

    store.set('listCollection', _t.listCollection);
    _t.removeItemData(_t.deletKey);
  },
  removeItemData: function(key) {
    let todoKey = 'todoList_' + key,
      completeKey = 'completeList_' + key;

    store.remove(todoKey);
    store.remove(completeKey);
  },
  initNum: function() {
    this.boxNum = store.get('todoList_0') ? store.get('todoList_0').length : '0';
  },
  initList: function() {
    this.listCollection = store.get('listCollection') || [];
  },
  addList: function() {
    let key = Math.random();
    let len = this.listCollection.length + 1; //每个list含不同key，默认从1开始
    this.listCollection.push({
      name: this.newVal,
      key: key,
      count: 0,
      removeStatus: false
    });
    store.set('listCollection', this.listCollection);
    this.layerStatus = false; //隐藏layer
  }
};

export default {
  data: function() {
    return {
      editStatus: false,
      layerStatus: false,
      leftStatus: false,
      deleteStatus: false,
      layerMessage: '清单名称',
      newVal: '',
      deleteIndex: '',
      boxNum: '',
      listCollection: []
    }
  },
  methods: methods,
  components: {
    create: create,
    edit: edit,
    layer: layer,
    message: message
  },
  ready: function() {
    this.initList();
    this.initNum();

    this.$on('layer_cancel', function() {
      this.layerStatus = false;
    });

    this.$on('layer_confirm', function() {
      this.addList();
      this.layerStatus = false;
    });

    this.$on('delete_cancel', function() {
      this.deleteStatus = false;
    });

    this.$on('delete_confirm', function() {
      this.removeListItem();
      this.deleteStatus = false;
    });
  }
}
