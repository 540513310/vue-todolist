import userHeader from '../../components/userHeader/userHeader.vue'
import content from '../../components/content/content.vue'

export default {
  data: function() {
    return {
      collections: ''
    }
  },
  components: {
    'user-header': userHeader,
    'content': content
  }
}
