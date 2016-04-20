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
  deleteItem: function(index) {
    this.messageStatus = true;
    this.deleteIndex = index;
    // this.removeListItem(index);
    // this.removeItemData(index);
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
      messageStatus: false,
      deleteIndex: '',
      boxNum: '',
      listCollection: [],
      numList: []
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
  }
}
