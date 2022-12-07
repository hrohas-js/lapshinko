export const Wishlist = {
    state: () => ({
        wishlist: []
    }),
    mutations: {
        SET_WISHLIST(state, cart) {
            state.wishlist = cart
        },
        ADD_TO_WISHLIST(state, item) {
            state.wishlist.push(item)
        },
        DELETE_FROM_WISHLIST(state, id) {
            state.wishlist = state.wishlist.filter(elem => {
                return elem.id !== id
            })
        }
    },
    actions: {
        setWishList({rootState, commit}) {
            if (Object.keys(rootState.profile.user).length > 0 && rootState.profile.user.meta.wishlist.length > 0) {
                commit('SET_WISHLIST', rootState.profile.user.meta.wishlist)
            }
            else if (sessionStorage.getItem('wishlist') !== null) {
                commit('SET_WISHLIST', JSON.parse(sessionStorage.getItem('wishlist')))
            }
        },
        updateWishList({state, rootState, dispatch}) {
            if (Object.keys(rootState.profile.user).length > 0) {
                dispatch('profile/updateUser', {
                    meta: {
                        wishlist: state.wishlist
                    }
                }, {root: true})
            }
            else {
                sessionStorage.setItem('wishlist', JSON.stringify(state.cart))
            }
        },
        addToWishList({commit, dispatch}, item) {
            commit('ADD_TO_WISHLIST', item)
            dispatch('updateWishList')
        },
        deleteFromWishList({commit, dispatch}, id) {
            commit('DELETE_FROM_WISHLIST', id)
            dispatch('updateWishList')
        }
    },
    namespaced: true
}
