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
    this.editStatus = false;
  },
  focusInit: function() {
    $('.edit-area').focus();
  }
}
export default {
  data: data,
  props: ['editStatus'],
  methods: methods,
  ready: function() {
    this.focusInit();
  }
}
