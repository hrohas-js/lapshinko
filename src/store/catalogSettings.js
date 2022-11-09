export const catalogSettings = {
    state: () => ({
            sortParams: 'popular',
            filterOptionsParams: '',
            maxPrice: null,
            minPrice: null
        }
    ),
    mutations: {
        SЕT_PARAMS(state, param) {
            state.sortParams = param
        },
        SET_MAX_PRICE(state, value) {
            state.maxPrice = value;
        },
        SET_MIN_PRICE(state, value) {
            state.minPrice = value;
        }
    },
    namespaced: true
}