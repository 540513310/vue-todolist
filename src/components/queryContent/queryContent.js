import store from '../../assets/js/store.js'

let methods = {
  back: function() {
    history.back();
  },
  initCollections: function() {
    this.collections = store.get('collections');
    this.$log('collections');
  }
};

export default {
  data: function() {
    return {
      collections: '',
      todoList: [],
      queryList: []
    }
  },
  methods: methods,
  ready: function() {
    this.initCollections();

    // let item1 = {
    //   'list': {
    //     "name": "清单3",
    //     "key": 0.8325454937281662,
    //     "count": 1,
    //     "removeStatus": false
    //   },
    //   'todoList': [{ 'text': '测试' }, { 'text': '再测试' }, { 'text': '还测试' }]
    // };
    // let item2 = {
    //   'list': '每日计划',
    //   'todoList': [{ 'text': '哈哈' }]
    // };
    // this.queryList.push(item1);
    // this.queryList.push(item2);

  }
}
