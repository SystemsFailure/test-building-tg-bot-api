import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";

const routes = [
    {
        path: '/register',
        // component: ,
        children: [
            {
                path: 'emailReg',
                meta: {isAuth: true}
            },
            {
                path: 'numberReg'
            }
        ]
    }
]

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes,
    }
)

// router.beforeEach(
//     async (to, from) => {
//         if(to.meta.isAuth) {
//             return {
//                 path: '/login',
//                 query: {redirect: to.fullPath}
//             }
//         }
//         if(!isAuth && to.name !== 'Login')
//         return {name: 'Login'}
//     }
// )

export default router