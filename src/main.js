import Vue from 'vue'
import VueTouch from 'vue-touch'
import VueRouter from 'vue-router'
import app from './view/app/app.vue'
import mailbox from './view/mailbox/mailbox.vue'
import query from './view/query/query.vue'
import $ from 'webpack-zepto'
import adapte from './assets/js/adapte'

window.$ = $;
adapte.setPxPerRem();

Vue.use(VueTouch)
Vue.use(VueRouter)

var router = new VueRouter();
var App = Vue.extend({});

Vue.filter('showQuery', function(val, type) {
  if (type === 'query') {
    return val;
  } else {
    return true;
  }
});

router.map({
  '/': {
    name: 'index',
    component: app
  },
  '/mailbox/:userId': {
    name: 'mailbox',
    component: mailbox
  },
  '/query': {
    name: 'query',
    component: query
  }
})

router.start(App, '#app');
