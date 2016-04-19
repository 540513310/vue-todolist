import nvHeader from '../../components/nvHeader/nvHeader.vue'
import listContent from '../../components/list/list.vue'


export default {
  components: {
    'nav-header': nvHeader,
    'list-content': listContent
  },
  data: function() {
    return {
      title: '',
      key: '123'
    }
  },
  route: {
    data: function(transition) {
      let query = transition.to.query;
      let title = query && query.title;
      let key = query && query.key;

      this.title = title;
      this.key = key; //不同的list,不同的key
    }
  },
  ready: function() {}
}
