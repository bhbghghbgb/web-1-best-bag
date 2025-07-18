import { createPinia } from 'pinia'
import { createApp } from 'vue'

import '@/styles/layers.css'
import '@/styles/vuetify-css.scss'
import '@/styles/main.css'
import vuetify from '@/plugins/vuetify'

import App from '@/App.vue'
import router from '@/router'

import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(vuetify)
app.use(VueMonacoEditorPlugin, {
  paths: {
    // You can change the CDN config to load other versions
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs',
  },
})

app.mount('#app')
