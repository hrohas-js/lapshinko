import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import("@/pages/Home");
const Catalog = () => import ("@/pages/catalog/Catalog");
const News = () => import('@/pages/news/News');
const PageNewsItem = () => import('@/pages/news/PageNewsItem');
const WishList = () => import('@/pages/WIshList');
const CatalogBody = () => import('@/pages/catalog/CatalogBody');
const GoodsCard = () => import('@/pages/GoodsCard');
const Profile = () => import('@/pages/Profile');
const Cart = () => import('@/pages/Cart');
const CheckOut = () => import('@/pages/CheckOut');
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
        path: '/catalogBody/:categoryId/:subcategoryId',
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
        path: '/goodsCard/:id',
        name: 'GoodsCard',
        component: GoodsCard
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/checkout',
        name: 'CheckOut',
        component: CheckOut
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
