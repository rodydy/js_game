import Vue from 'vue';
import VueRouter from 'vue-router';

// 主页面
import Home from "@/view/home"
import Layout from "@/view/layout"
import Search from "@/view/search"
import Play from "@/view/play"

Vue.use(VueRouter);

const router = new VueRouter({
    base: '/',
    routes: [
        {
            path:"/",
            redirect:'layout',
        },
        {
            path: '/layout',
            component: Layout,
            redirect:'/layout/home',
            // 主页面
            children: [
                {
                    path: 'home',
                    component: Home,
                    meta:{ // 路由到首页的额外信息
                        title:"首页"
                    }
                },
                {
                    path: 'search',
                    component: Search,
                    meta:{
                        title:"搜索"
                    }
                }
            ]
        },
        {
            path: "/play",
            component: Play
        }
    ]
});

export default router;