import './assets/main.css'

import { createApp, h, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import apolloClient from './apollo'
import { registerComponents } from './registerComponents'

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
})

app.use(createPinia())
app.use(router)
registerComponents(app)

app.mount('#app')
