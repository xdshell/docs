# 在 vue 中使用 xdsh

```shell
npm install vue-xdsh
```

```ts
import Xdsh from 'vue-xdsh'
import App from './App.vue'
import { createApp } from 'vue'

createApp(App).use(Xdsh).mount('#app')
```