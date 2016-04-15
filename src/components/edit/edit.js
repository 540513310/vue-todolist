var resizeHeight = function() {
  var titleHeight = $('.nav-title').height(),
    editHeight = $('.edit-area').height;
  var footerHeight = $('body').height - titleHeight - editHeight;
  console.log(footerHeight);
  return footerHeight;
}


var data = function() {
  return {
    test: ''
  }
}

var methods = {
  tap: function() {
    alert(this.test);
  }
}
export default {
  data: data,
  methods: methods,
  computed: function() {
    footerHeight: resizeHeight();
  }
}
