import Vue from 'vue/dist/vue';
import AppHello from './Hello.vue';
import AppHelloLess from './Hello.Less.vue';

var app = new Vue({
  el: '#app',
  template: `<div><AppHello /><AppHelloLess /></div>`,
  components: {
    AppHello,
    AppHelloLess
  }
});
