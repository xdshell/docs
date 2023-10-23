# 在 vue 中使用 xdsh

```shell
npm install vue-xdsh
```

```js
// main.js
import Xdsh from 'vue-xdsh'
import 'vue-xdsh/dist/style.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(Xdsh).mount('#app')
```

```js
// App.vue
<template>
  <Xdsh></Xdsh>
</template>

// (or) App.vue
<script setup>
import img from './img.json'
</script>

<template>
  <Xdsh :img="img"></Xdsh>
</template>
```

```json
// img.json
{
  "name": "/",
  "type": 0,
  "body": [
    {
      "name": "usr",
      "type": 0,
      "body": [
        {
          "name": "bin",
          "type": 0,
          "body": []
        },
        {
          "name": "config",
          "type": 1,
          "body": "{\"user\": \"insorker\",\"version\":\"v1.0.0\",\"hostname\":\"xdsh\",\"wdpathLength\":2}"
        }
      ]
    },
    {
      "name": "xdsh",
      "type": 0,
      "body": [
        {
          "name": "docs",
          "type": 2,
          "body": "https://github.com/xdshell/docs"
        },
        {
          "name": "xdsh",
          "type": 2,
          "body": "https://github.com/xdshell/xdsh"
        }
      ]
    },
    {
      "name": "insorker",
      "type": 0,
      "body": [
        {
          "name": "bilibili",
          "type": 2,
          "body": "https://space.bilibili.com/434618849/"
        },
        {
          "name": "github",
          "type": 2,
          "body": "https://github.com/xdshell"
        }
      ]
    }
  ]
}
```