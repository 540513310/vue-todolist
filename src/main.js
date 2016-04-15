import Vue from 'vue'
import VueTouch from 'vue-touch'
import VueRouter from 'vue-router'
import app from './app/app.vue'
import $ from 'webpack-zepto';

Vue.use(VueTouch)
Vue.use(VueRouter)

var router = new VueRouter();
var App = Vue.extend({});

router.map({
  '/': {
    component: app
  }
})

router.start(App, '#app');
