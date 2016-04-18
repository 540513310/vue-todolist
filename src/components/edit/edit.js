var data = function() {
  return {
    test: ''
  }
}

var methods = {
  tap: function() {
    alert(this.test);
  },
  cancel: function() {
    this.showEdit = false;
  },
  focusInit: function() {
    $('.edit-area').focus();
  }
}
export default {
  data: data,
  props: ['showEdit'],
  methods: methods,
  ready: function() {
    this.focusInit();
  }
}
