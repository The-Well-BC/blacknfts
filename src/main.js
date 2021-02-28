import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let Vue = createApp(App)
Vue.config.devtools = process.env.NODE_ENV === 'development'
console.log('IS NODE ENV DEVELEOPMENT?:', process.env.NODE_ENV === 'development', '\nNODE ENF:', process.env.NODE_ENV); 

console.log('DEVE TOOKS', Vue.config.devtools);

// createApp(App).use(store).use(router).mount('#app')
Vue.use(store).use(router).mount('#app')
