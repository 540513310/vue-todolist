import store from '../../assets/js/store.js'

var methods = {
  cancel: function() {
    this.layerStatus = false;
  },
  addList: function() {
    let len = this.listCollection.length + 1; //每个list含不同key，默认从1开始
    this.listCollection.push({
      name: this.newList,
      key: len,
      count: 0,
      removeStatus: false
    });
    store.set('listCollection', this.listCollection);
    this.layerStatus = false;
  }
};

var data = function() {
  return {
    newList: ''
  }
};

export default {
  data: data,
  props: ['layerStatus', 'listCollection'],
  methods: methods,
  ready: function() {
    this.listCollection = store.get('listCollection') || [];
  }
}
