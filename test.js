import Vue from 'vue/dist/vue';
import Hello from './Hello.vue';
import HelloLess from './Hello.Less.vue';
import HelloNoStyle from './Hello.NoStyle.vue';
import HelloRenderless from './Hello.Renderless.vue';

var app = new Vue({
  el: '#app',
  template: `<div>
    <Hello />
    <HelloLess />
    <HelloNoStyle />
    <HelloRenderless v-slot="{ message, up, down, total }">
      <p>
        {{message}}<br/>
        Current total is {{total}}</br>
        <button @click="down">Down</button>
        <button @click="up">Up</button>
      </p>
    </HelloRenderless>
  </div>`,
  components: {
    Hello,
    HelloLess,
    HelloNoStyle,
    HelloRenderless
  }
});
