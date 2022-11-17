export const Cart = {
    state: () => ({
        cart: []
    }),
    getters: {
        cartList: (state, rootState) => {
            let list = []
            rootState.catalog.catalog.forEach(elem => {
                state.cart.forEach(item => {
                    if (elem.id === item) {
                        list.push(elem)
                    }
                })
            })
            return list
        }
    },
    mutations: {
        SET_CART(state, cart) {
            state.cart = cart
            console.log(state.cart)
        },
        ADD_TO_CART(state, id) {
            state.cart.push(id)
        },
        DELETE_FROM_CART(state, id) {
            state.cart = state.cart.filter(elem => {
                return elem.id !== id
            })
        }
    },
    actions: {
        setCart({rootState, commit}) {
            if (Object.keys(rootState.profile.user).length > 0 && rootState.profile.user.meta.cart.length > 0) {
                commit('SET_CART', JSON.parse(rootState.profile.user.meta.cart))
            }
            else if (sessionStorage.getItem('cart') !== null) {
                commit('SET_CART', JSON.parse(sessionStorage.getItem('cart')))
            }
        },
        updateCart({state, rootState, dispatch}) {
            if (Object.keys(rootState.profile.user).length > 0) {
                dispatch('profile/updateUser', {
                    meta: {
                        cart: JSON.stringify(state.cart)
                    }
                }, {
                    root: true
                })
            }
            else {
                sessionStorage.setItem('cart', JSON.stringify(state.cart))
            }
        },
        addToCart({commit, dispatch}, id) {
            commit('ADD_TO_CART', id)
            dispatch('updateCart')
        },
        deleteFromCart({commit, dispatch}, id) {
            commit('DELETE_FROM_CART', id)
            dispatch('updateCart')
        }
    },
    namespaced: true
}
