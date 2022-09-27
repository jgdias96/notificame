import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueSidebarMenuAkahon from 'vue-sidebar-menu-akahon'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

const app = createApp(App)
app.use(router)
app.component('vue-sidebar-menu-akahon', VueSidebarMenuAkahon)
app.use(VueSidebarMenuAkahon)
app.mount('#app')
