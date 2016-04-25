let methods = {
  back: function() {
    history.back();
  },
  toggleInput: function() {
    this.$dispatch('query_toggleInput');
  }
}

export default {
  data: function() {
    return {

    }
  },
  props: ['title'],
  methods: methods,
  ready: function() {
    // this.$watch('title', function(newVal, oldVal) {
    //   console.log(newVal, oldVal);
    // });
  }
}
