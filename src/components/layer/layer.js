import store from '../../assets/js/store.js'

var methods = {
  cancel: function() {
    this.layerStatus = false;
  },
  addList: function() {
    this.listCollection.push({
      name: this.newList
    });
    store.set('listCollection', this.listCollection);
    this.layerStatus = false;
  }
};

var data = function() {
  return {
    newList: '',
    listCollection: []
  }
};

export default {
  data: data,
  props: ['layerStatus'],
  methods: methods,
  ready: function() {
    this.listCollection = store.get('listCollection') || [];
  }
}
