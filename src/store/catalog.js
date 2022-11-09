export const Catalog = {
    state: () => ({
        catalog:[],
    }),
    mutations: {
        SET_CATALOG(state, item){
            state.catalog = item;
            console.log(state.catalog);
        }
    },
    actions: {
        async FetchCatalog({rootState, commit}, post_info){
            const response = await rootState.axiosInstance.get('wc/v3/products', {
                headers: {
                    Authorization: `Bearer ${rootState.jwt}`,
                },
                params: {
                    per_page: 100,
                }
            })
            commit('SET_CATALOG', response.data);
        }
    },
    namespaced: true,
}
