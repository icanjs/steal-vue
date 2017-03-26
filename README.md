[![Build Status](https://travis-ci.org/stealjs/steal-vue.svg?branch=master)](https://travis-ci.org/stealjs/steal-vue)
[![npm version](https://badge.fury.io/js/steal-vue.svg)](https://badge.fury.io/js/steal-vue)

# StealJS plugin for Vue.js Single File Components.

Steal ([StealJS](http://stealjs.com/)) is a module loader with sane defaults.  With the _steal-vue_ plugin, Steal can bundle Vue.js Single File Components with your application.  In addition to CSS styles, it includes support for Less, and Sass styles by using the `lang` attribute.

## Install

```cmd
npm install steal-vue --save
```

You'll want to also update your `steal` config.  Add `steal-vue` to your list of plugins.  

> Don't forget to add the steal plugin for whichever type of styles you'll be using.

```json
{
  "steal": {
    "plugins": [
      "steal-vue",
      "steal-css",
      "steal-less"
    ]
  }
}
```

## Use

After you've installed the plugin, you'll be able to load `.vue` files:

```vue
// Hello.vue
<template>
  <p class="hello-less">{{message}}</p>
</template>

<script>
export default {
  name: 'hello-less',
  data () {
    return {
      message: 'Hello, Vue with Less!'
    }
  },
  methods: {
    log (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="less">
p {
  padding: 100px;
  &.hello-less {
    color: lightseagreen;
    font-weight: bold;
  }
}
</style>
```

You can use the above example `.vue` component like this:

```js
// Import the component like any JS file.
import AppHello from './Hello.vue';
import Vue from 'vue/dist/vue';

// Register it as a global component
Vue.component('app-hello', AppHello);

var app = new Vue({
  el: '#app',
  template: `<AppHello />`,
  components: {
    // Or pass it in as a local component
    AppHello
  }
});
```

## Demo
Run the (admittedly simple) demo by cloning this repo, running `npm install` or `yarn`, and starting an http-server in the root folder.
## License

MIT