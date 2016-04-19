import create from '../create/create.vue'
import edit from '../edit/edit.vue'
import layer from '../layer/layer.vue'
import store from '../../assets/js/store.js'

var ctrl = {

};

var methods = {
  showEdit: function() {
    this.editStatus = true;
  },
  showLayer: function() {
    this.layerStatus = true;
  },
  initNum: function() {
    var todoList = store.get('todoList') || [];
    $.each(todoList, function(index, item) {

    });
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
