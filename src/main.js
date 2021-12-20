import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import "vue-easytable/libs/theme-default/index.css";




createApp(App).use(store)
              .mount('#app')
              
