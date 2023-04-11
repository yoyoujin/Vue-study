import { createApp } from 'vue'
import App from './App.vue'
// import FormBinding from './FromBinding.vue'
// import FetchingData from './FetchingData.vue'
// import CRUD from './CRUD.vue'
import './assets/main.css'
import router from './routes'

createApp(App).use(router).mount('#app')
