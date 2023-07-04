import './assets/main.css'
import 'ant-design-vue/dist/antd.css'

import { createApp } from 'vue'
import antd from 'ant-design-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(antd)
app.mount('#app')
