import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './components/Axios'

createApp(App).use(router).mount('#app')
