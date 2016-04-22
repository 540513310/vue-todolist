export default {
  data: function() {
    return {

    }
  },
  props: ['title'],
  methods: {
    back: function() {
      history.back();
    }
  }
}
