import { createStore } from 'vuex'
import { Category } from "@/store/category";
import { News } from "@/store/news";
import { NewsPreview } from "@/store/newsPreview";
import { catalogSettings } from "@/store/catalogSettings";
import { Product } from "@/store/product";
import { Profile } from "@/store/profile";
import { Catalog } from "@/store/catalog";
import { Wishlist } from "@/store/wishlist";
import { Cart } from "@/store/cart";
import axios from 'axios';

export default createStore({
    state: {
        axiosInstance: null,
        jwt: '',
        displayWidth: 0,
        statusText: '',
        showedStatus: false,
        showBurger: false
    },
    getters: {},
    mutations: {
        SET_AXIOS_INSTANCE(state) {
            state.axiosInstance = axios.create({
                baseURL: '/wp-json/'
            });
        },
        SET_JWT(state, jwt) {
            state.jwt = jwt;
        },
        SET_DISPLAY_WIDTH(state, innerWidth) {
            state.displayWidth = innerWidth;
        },
        SET_STATUS_TEXT(state, text) {
            state.statusText = text;
        },
        SHOWED_STATUS(state) {
            state.showedStatus = true;
            setTimeout(() => {
                state.showedStatus = false;
                state.statusText = ''
            }, 3000);
        },
        SET_SHOW_BURGER(state) {
            state.showBurger = !state.showBurger;
        }
    },
    actions: {
        async FetchAuthToken({state, commit, dispatch}, user) {
            await state.axiosInstance.post('jwt-auth/v1/token', {
                username: user.username,
                password: user.password
            }).then((response) => {
                sessionStorage.setItem('jwt', response.data.token);
                commit('SET_JWT', response.data.token);
            }).then(() => {
                dispatch('catalog/FetchCatalog');
                dispatch('category/FetchCategories');
            });
        },
    },
    modules: {
        category: Category,
        news: News,
        newsPreview: NewsPreview,
        catalogSettings: catalogSettings,
        product: Product,
        profile: Profile,
        catalog: Catalog,
        wishlist: Wishlist,
        cart: Cart
    }
})
