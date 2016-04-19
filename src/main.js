import Vue from 'vue'
import VueTouch from 'vue-touch'
import VueRouter from 'vue-router'
import app from './view/app/app.vue'
import mailbox from './view/mailbox/mailbox.vue'
import $ from 'webpack-zepto'

window.$ = $;
Vue.use(VueTouch)
Vue.use(VueRouter)

var router = new VueRouter();
var App = Vue.extend({});

router.map({
  '/': {
    name: 'index',
    component: app
  },
  '/mailbox/:userId': {
    name: 'mailbox',
    component: mailbox
  }
})

router.start(App, '#app');
