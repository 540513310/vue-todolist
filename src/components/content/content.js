import create from '../create/create.vue'
import edit from '../edit/edit.vue'

var methods = {
  tap: function() {
    this.showEdit = true;
  }
}
export default {
  data: function() {
    return {
      showEdit: false
    }
  },
  methods: methods,
  components: {
    create: create,
    edit: edit
  }
}
