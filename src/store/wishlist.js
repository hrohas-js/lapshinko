export const Wishlist = {
    state: () => ({
        wishlist: sessionStorage.getItem('wishlist') !== null ? JSON.parse(sessionStorage.getItem('wishlist')) : []
    }),
    mutations: {
        ADD_TO_WISHLIST(state, item) {
            state.wishlist.push(item)
            sessionStorage.setItem('wishlist', JSON.stringify(state.wishlist))
        },
        REMOVE_FROM_WISHLIST(state, id) {
            state.wishlist = state.wishlist.filter(elem => {
                return elem.id !== id
            })
            if (state.wishlist.length > 0) {
                sessionStorage.setItem('wishlist', JSON.stringify(state.wishlist))
            }
            else {
                sessionStorage.removeItem('wishlist')
            }
        }
    },
    actions: {
        updateWishlist({ commit }, updates) {
            if (updates.flag) {
                commit('ADD_TO_WISHLIST', updates.item)
            } else {
                commit('REMOVE_FROM_WISHLIST', updates.item.id)
            }
        }
    },
    namespaced: true
}
