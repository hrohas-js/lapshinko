import {createRouter, createWebHistory} from 'vue-router'
import store from '../store/index'

const Home = () => import("@/pages/Home");
const Catalog = () => import ("@/pages/catalog/Catalog");
const News = () => import('@/pages/news/News');
const PageNewsItem = () => import('@/pages/news/PageNewsItem');
const WishList = () => import('@/pages/WishList');
const CatalogBody = () => import('@/pages/catalog/CatalogBody');
const GoodsCard = () => import('@/pages/GoodsCard');
const Profile = () => import('@/pages/Profile');
const Cart = () => import('@/pages/Cart');
const CheckOut = () => import('@/pages/CheckOut');
const NotFound = () => import('@/pages/NotFound');

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
        path: '/catalog-body/:categoryId/:subcategoryId',
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
        path: '/wishlist',
        name: 'WishList',
        component: WishList
    },
    {
        path: '/goods-card/:id',
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
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior: () => {
        window.scrollTo({top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
})

router.beforeEach((to, from, next) => {
    if (to.name === 'Profile' && !store.getters['profile/isUserExist']) {
        next('/')
    }
    else {
        next()
    }
})

export default router
