import Vue from 'vue'
import VueRouter from 'vue-router'
import ka from './components/KaBody.vue'
import KaProduct from './components/KaList.vue'
import KaInput from './components/KaInput.vue'
import KaNc from './components/ka-nav-c.vue'
import KaNl from './components/ka-nav-l.vue'
import pdetail from './components/ka-detail.vue'
import KdetailDes from './components/K-detailDes.vue'
import Kanote from './components/ka-detail-page.vue'

import Kslide from './components/Kslide.vue'

import klogin from './components/Kakao.vue'






Vue.config.productionTip = false

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/ka',
            name: 'ka',
            component: ka
        },
        {
            path: '/KaInput',
            name: 'KaInput',
            component: KaInput
        },
        {
            path: '/KaProduct',
            name: 'KaProduct',
            component: KaProduct
        },
        {
            path: '/KaNc',
            name: 'KaNc',
            component: KaNc
        },
        {
            path: '/KaNl',
            name: 'KaNl',
            component: KaNl
        },
        {
            path: '/pdetail',
            name: 'pdetail',
            component: pdetail
        },
        {
            path: '/KdetailDes',
            name: 'KdetailDes',
            component: KdetailDes
        },
        {
            path: '/Kanote',
            name: 'Kanote',
            component: Kanote
        },
        {
            path: 'Kslide',
            name: 'Kslide',
            component: Kslide
        },
        {
            path: '/klogin',
            name: 'klogin',
            component: klogin
        }
    ]
});

export default router  