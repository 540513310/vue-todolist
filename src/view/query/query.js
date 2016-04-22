import queryHeader from '../../components/queryHeader/queryHeader.vue'
import queryContent from '../../components/queryContent/queryContent.vue'


export default {
  components: {
    'query-header': queryHeader,
    'query-content': queryContent
  },
  data: function() {
    return {
      title: '',
      key: '123'
    }
  },
  ready: function() {}
}
