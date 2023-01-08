export const Cart = {
    state: () => ({
        cart: [],
        minCost: 1000,
        freeDeliveryCostCart: 3000,
        deliveryCost: 300
    }),
    getters: {
        cartLength: state => {
            return state.cart.length
        },
        cartTotal: state => {
            return state.cart.reduce((sum, cur) => {
                return sum + cur.price * cur.quantity
            }, 0)
        }
    },
    mutations: {
        SET_CART(state, cart) {
            state.cart = cart
        },
        ADD_TO_CART(state, item) {
            state.cart.push(item)
        },
        DELETE_FROM_CART(state, id) {
            state.cart = state.cart.filter(elem => {
                return elem.product_id !== id
            })
        },
        SET_PLUS_QUANTITY(state, id) {
            state.cart.forEach(elem => {
                if (elem.product_id === id) {
                    elem.quantity++
                }
            })
        },
        SET_MINUS_QUANTITY(state, id) {
            state.cart.forEach(elem => {
                if (elem.product_id === id) {
                    elem.quantity--
                }
            })
        }
    },
    actions: {
        setCart({rootState, commit}) {
            if (Object.keys(rootState.profile.user).length > 0 && rootState.profile.user.meta.cart.length > 0) {
                commit('SET_CART', rootState.profile.user.meta.cart)
            }
            else if (sessionStorage.getItem('cart') !== null) {
                commit('SET_CART', JSON.parse(sessionStorage.getItem('cart')))
            }
        },
        updateCart({state, rootState, dispatch}) {
            if (Object.keys(rootState.profile.user).length > 0) {
                dispatch('profile/updateUser', {
                    meta: {
                        cart: state.cart
                    }
                }, {root: true})
            }
            else {
                sessionStorage.setItem('cart', JSON.stringify(state.cart))
            }
        },
        addToCart({commit, dispatch}, item) {
            commit('ADD_TO_CART', item)
            dispatch('updateCart')
        },
        deleteFromCart({commit, dispatch}, id) {
            commit('DELETE_FROM_CART', id)
            dispatch('updateCart')
        },
        setPlusQuantity({commit, dispatch}, id) {
            commit('SET_PLUS_QUANTITY', id)
            dispatch('updateCart')
        },
        setMinusQuantity({commit, dispatch}, id) {
            commit('SET_MINUS_QUANTITY', id)
            dispatch('updateCart')
        }
    },
    namespaced: true
}
