import { createStore } from 'vuex'
import {Category} from "@/store/category";
import {News} from "@/store/news";
import {NewsPreview} from "@/store/newsPreview";
import {catalogSettings} from "@/store/catalogSettings";
import {Product} from "@/store/product";
import {Profile} from "@/store/profile";

export default createStore({
  state: {
    display_width: 0
  },
  getters: {
  },
  mutations: {
    SET_DISPLAY_WIDTH(state, innerWidth) {
      state.display_width = innerWidth;
    }
  },
  actions: {
  },
  modules: {
    category: Category,
    news:News,
    newsPreview:NewsPreview,
    catalogSettings:catalogSettings,
    product:Product,
    profile:Profile
  }
})
