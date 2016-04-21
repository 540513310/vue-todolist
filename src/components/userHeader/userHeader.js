import layer from '../layer/layer.vue'
import store from '../../assets/js/store.js'

export default {
  data: function() {
    return {
      layerStatus: false,
      layerMessage: '修改名称',
      newVal: '',
      firstName: '默',
      name: '默认用户'
    }
  },
  methods: {
    showEditName: function() {
      this.layerStatus = true;
    },
    editName: function(name) {
      let localName = store.get('name') || '默认用户';
      let newName = name ? name : localName;

      this.firstName = newName.substr(0, 1);
      this.name = newName;
      store.set('name', newName);
    }
  },
  components: {
    layer: layer
  },
  ready: function() {
    this.$on('layer_cancel', function() {
      this.layerStatus = false;
    });

    this.$on('layer_confirm', function() {
      this.layerStatus = false;
      this.editName(this.newVal);
    });

    this.editName(); //初始化name
  }
}
