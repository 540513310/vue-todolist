import store from '../../assets/js/store.js'

var methods = {
  cancel: function() {
    this.$dispatch('layer_cancel');
  },
  commit: function() {
    this.$dispatch('layer_confirm');
  }
};

var data = function() {
  return {}
};

export default {
  data: data,
  props: ['layerStatus', 'newVal', 'layerMessage'],
  methods: methods,
  ready: function() {
    this.$on('layer_cancel', function() {
      return true;
    });

    this.$on('layer_confirm', function() {
      return true;
    });
  }
}
