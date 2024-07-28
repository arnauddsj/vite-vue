import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './routes'
import { PluginLoader } from './pluginLoader'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)

const pluginLoader = new PluginLoader()

pluginLoader.loadPlugins(app).then(() => {
  app.mount('#app')
})