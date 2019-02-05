import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// import store from '@/store.js'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('./views/Dashboard.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/menu',
            name: 'menu',
            component: () => import('./views/Menu.vue')
        },
        {
            path: '/sign-in',
            name: 'signin',
            component: () => import('./views/Signin.vue')
        },
        {
            path: '/join',
            name: 'join',
            component: () => import('./views/Join.vue')
        },
        {
            path: '/set-goals',
            name: 'SetGoals',
            component: () => import('./views/SetGoals.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/enter-results',
            name: 'EnterResults',
            component: () => import('./views/EnterResults.vue'),
            meta: {
                authRequired: true
            }
        }
    ]
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.authRequired)) {
//         if (!store.state.isAuthenticated) {
//             next({
//                 path: '/sign-in'
//             });
//         } else {
//             next();
//         }
//     } else {
//         next();
//     }
// });