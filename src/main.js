import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './components/Axios'

// let token = JSON.parse(localStorage.getItem('token'));
// if (token) {
//     window.axios.default.headers.common['Authorization'] = 'Bearer' + token
// }

createApp(App).use(router).mount('#app')
