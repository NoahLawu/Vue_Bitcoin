import {
    createApp
} from 'vue/dist/vue.esm-bundler';

import {
    router
} from './routes'


const app = createApp({})

app.use(router)

app.mount('#app')