var data = function() {
  return {
    test: 1
  }
}

var methods = {
  tap: function() {
    this.showEdit = true;
  }
}
export default {
  data: data,
  props: ['showEdit'],
  methods: methods
}
