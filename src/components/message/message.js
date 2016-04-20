import store from '../../assets/js/store.js'

var methods = {
  cancel: function() {
    this.messageStatus = false;
  },
  confirm: function() {
    this.messageStatus = false;
    this.removeListItem(this.deleteIndex);
    // this.removeItemData(this.deleteIndex);
  },
  removeListItem: function(index) {
    let _t = this,
      _index = index;

    $.each(_t.listCollection, function(index, item) {
      if (_index === index) {
        var removeList = _t.listCollection.splice(index, 1)[0];
        _t.deletKey = removeList['key'];
      }
    });
    store.set('listCollection', _t.listCollection);
    _t.removeItemData(_t.deletKey);
  },
  removeItemData: function(key) {
    let todoKey = 'todoList_' + key,
      completeKey = 'completeList_' + key;

    console.log(todoKey, completeKey);
    store.remove(todoKey);
    store.remove(completeKey);
  },
};

export default {
  data: function() {
    return {
      deletKey: ''
    }
  },
  props: ['messageStatus', 'listCollection', 'deleteIndex'],
  methods: methods,
  ready: function() {
    // this.listCollection = store.get('listCollection') || [];
  }
}
