import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import("@/pages/Home");
const Catalog = () => import ("@/pages/Catalog/Catalog");
const News = () => import('@/pages/news/News');
const PageNewsItem = () => import('@/pages/news/PageNewsItem');
const WishList = () => import('@/pages/WIshList');
const CatalogBody = () => import('@/pages/Catalog/CatalogBody');
const GoodsCard = () => import('@/pages/GoodsCard');
const lk = () => import('@/pages/Profile');
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/catalogBody',
        name: 'CatalogBody',
        component: CatalogBody
    },
    {
        path: '/news',
        name: 'News',
        component: News
    },
    {
        path: '/someNews',
        name: 'NewsItem',
        component: PageNewsItem
    },
    {
        path: '/wishList',
        name: 'WishList',
        component: WishList
    },
    {
        path: '/goodsCard',
        name: 'GoodsCard',
        component: GoodsCard
    },
    {
        path: '/profile',
        name: 'lk',
        component: lk
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
