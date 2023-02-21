import {
    createRouter,
    createWebHashHistory,
    // createMemoryHistory
} from 'vue-router';

import Home from './pages/Home'
import ConvertIdrToBtc from './pages/ConvertIdrToBtc'
import ConvertBtcToIdr from './pages/ConvertBtcToIdr'

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/convert-idr-to-btc',
        component: ConvertIdrToBtc
    },
    {
        path: '/convert-btc-to-idr',
        component: ConvertBtcToIdr
    },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export {
    routes,
    router
}