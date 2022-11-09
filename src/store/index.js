import { createStore } from 'vuex'
import {Category} from "@/store/category";
import {News} from "@/store/news";
import {NewsPreview} from "@/store/newsPreview";
import {catalogSettings} from "@/store/catalogSettings";
import {Product} from "@/store/product";
import {Profile} from "@/store/profile";
import {Catalog} from "@/store/catalog";
import axios from 'axios';

export default createStore({
  state: {
    axiosInstance:null,
    jwt:'',
    display_width: 0
  },
  getters: {
  },
  mutations: {
    SET_AXIOS_INSTANCE(state) {
      state.axiosInstance = axios.create({
        baseURL: '/wp-json/'
      });
    },
    SET_JWT(state, jwt){
      state.jwt = jwt;
    },
    SET_DISPLAY_WIDTH(state, innerWidth) {
      state.display_width = innerWidth;
    },
  },
  actions: {
    async FetchAuthToken({state, commit, dispatch}) {
      if (sessionStorage.getItem('jwt') != null) {
        commit('SET_JWT', sessionStorage.getItem('jwt'));
        dispatch('catalog/FetchCatalog');
        dispatch('category/FetchCategories');
      } else {
        await state.axiosInstance.post('jwt-auth/v1/token', {
          username: 'admin',
          password: 'rus256303'
        }).then((response) => {
          sessionStorage.setItem('jwt', response.data.token);
          commit('SET_JWT', response.data.token);
          dispatch('catalog/FetchCatalog');
          dispatch('category/FetchCategories');
        });
      }
    },
  },
  modules: {
    category: Category,
    news:News,
    newsPreview:NewsPreview,
    catalogSettings:catalogSettings,
    product:Product,
    profile:Profile,
    catalog:Catalog,
  }
})
