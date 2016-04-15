var data = function() {
  return {
    test: 1
  }
}

var methods = {
  tap: function() {
    alert(this.test);
  }
}
export default {
  data: data,
  methods: methods
}
