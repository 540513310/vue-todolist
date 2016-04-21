import store from '../../assets/js/store.js'

var methods = {
  cancel: function() {
    this.$dispatch('delete_cancel');
  },
  confirm: function() {
    this.$dispatch('delete_confirm');
  }
};

export default {
  data: function() {
    return {}
  },
  props: ['deleteStatus'],
  methods: methods,
  ready: function() {
    this.$on('delete_cancel', function() {
      return true;
    });

    this.$on('delete_confirm', function() {
      return true;
    });
    // this.listCollection = store.get('listCollection') || [];
  }
}
