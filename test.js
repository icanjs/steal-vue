import Vue from 'vue/dist/vue';
import AppHello from './Hello.vue';

var app = new Vue({
  el: '#app',
  template: `<AppHello />`,
  components: {
    AppHello
  }
});
