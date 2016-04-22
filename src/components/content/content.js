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
    console.log('show');
    this.toggleDelete(index, true);
  },
  hideDelete: function(index) {
    console.log('hide');
    this.toggleDelete(index, false);
  },
  toggleDelete: function(index, status) {
    let _t = this,
      _index = index;
    $.each(_t.collections, function(index, item) {
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

    $.each(_t.collections, function(index, item) {
      if (_index === index) {
        _t.collections.splice(index, 1)[0];
      }
    })

    store.set('collections', _t.collections);
  },
  removeItemData: function(key) {
    let todoKey = 'todoList_' + key,
      completeKey = 'completeList_' + key;

    store.remove(todoKey);
    store.remove(completeKey);
  },
  initNum: function() {
    var _t = this;
    $.each(_t.collections, function(index, item) {
      if (item['defaultList']) {
        _t.defaultNum = item['count'];
      }
    })
  },
  initCollections: function() {
    let _t = this;
    this.collections = store.get('collections') || [];

    var noDefault = this.collections.every(function(item, index) {
      return !item['defaultList'];
    });
    if (noDefault) {
      _t.addDefaultList();
    }

    this.$log('collections');
  },
  addList: function() {
    let key = Math.random();
    this.collections.push({
      'key': key,
      'name': this.newVal,
      'count': 0,
      'removeStatus': false,
      'defaultList': false,
      'todoList': [],
      'completeList': []
    });
    store.set('collections', this.collections);
    this.layerStatus = false; //隐藏layer
  },
  addDefaultList: function() {
    this.collections.push({
      'key': '0',
      'name': '收件箱',
      'count': 0,
      'removeStatus': false,
      'todoList': [],
      'completeList': [],
      'defaultList': true
    });
    store.set('collections', this.collections);
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
      defaultNum: '',
      listCollection: [],
      collections: [],
      defaultList: ''
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
    this.initCollections();
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
