export const Category = {
    state: () => ({
        categories: [],
        PopularCategory: [

            {
                id: '1',
                picture: 'http://lapshinka-api.store/lapshinkoServ/png/category/milkProducts.webp',
                miniImg: 'http://lapshinka-api.store/lapshinkoServ/png/categoryMob/milkProducts.webp',
                name: 'молочная продукция',
                rating: '1',
                link: '/catalog-body/86/all'
            },
            {
                id: '2',
                picture: 'http://lapshinka-api.store/lapshinkoServ/png/category/meatProducts.webp',
                miniImg: 'http://lapshinka-api.store/lapshinkoServ/png/categoryMob/meatProducts.webp',
                name: 'мясная продукция',
                rating: '3',
                link: '/catalog-body/151/all'
            },
            {
                id: '3',
                picture: 'http://lapshinka-api.store/lapshinkoServ/png/category/vegetableProducts.webp',
                miniImg: 'http://lapshinka-api.store/lapshinkoServ/png/categoryMob/vegetableProducts.webp',
                name: 'овощи',
                rating: '3',
                link: '/catalog-body/243/all'
            }
        ]
    }),
    getters: {
        mainCategories(state) {
            return [...state.categories].filter(elem => {
                return elem.parent === 0;
            });
        },
    },
    mutations: {
        SET_CATEGORIES(state, category) {
            state.categories = category.filter(elem => {
                return elem.name !== 'Misc';
            });
            console.log(category);
        },
    },
    actions: {
        async FetchCategories({rootState, commit}) {
            const response = await rootState.axiosInstance.get(`wc/v3/products/categories`, {
                headers: {
                    Authorization: `Bearer ${rootState.jwt}`,
                },
                params: {
                    per_page: 100
                }
            })
            commit('SET_CATEGORIES', response.data);
        }
    },
    namespaced: true
}
