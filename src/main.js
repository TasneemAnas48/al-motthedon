import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { PiniaVuePlugin } from 'pinia'
import pinia from './store'
Vue.use(PiniaVuePlugin)


import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


// Import Bootstrap and BootstrapVue CSS files 
import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import AOS from 'aos'
import 'aos/dist/aos.css'

import ScrollAnimation from "./directives/scrollanimation"
Vue.directive('scrollanimation', ScrollAnimation)

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);


Vue.config.productionTip = false

new Vue({
  router,
  pinia,
  render: function (h) { return h(App) },
  mounted() {
    AOS.init()
  },
}).$mount('#app')
