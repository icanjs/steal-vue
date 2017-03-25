[![Build Status](https://travis-ci.org/stealjs/steal-vue.svg?branch=master)](https://travis-ci.org/stealjs/steal-vue)
[![npm version](https://badge.fury.io/js/steal-vue.svg)](https://badge.fury.io/js/steal-vue)

> Note: I still haven't gotten styles to work.
# StealJS plugin for Vue.js Single File Components.

Steal ([StealJS](http://stealjs.com/)) is a module loader with sane defaults.  With the _steal-vue_ plugin, Steal can bundle Vue.js Single File Components with your application.

## Install

```cmd
npm install steal-vue --save
```

You'll want to also update your `steal` config:

```json
{
  "steal": {
    "plugins": [
      "steal-vue"
    ]
  }
}
```

## Use

After you've installed the plugin, you'll be able to load `.vue` files
## License

MIT