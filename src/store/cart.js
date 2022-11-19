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
            console.log(state.cart)
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
            if (Object.keys(rootState.profile.user).length > 0 && localStorage.getItem('cart_' + rootState.profile.user.name) != null) {
                commit('SET_CART', JSON.parse(localStorage.getItem('cart_' + rootState.profile.user.name)))
            }
            else if (sessionStorage.getItem('cart') !== null) {
                commit('SET_CART', JSON.parse(sessionStorage.getItem('cart')))
            }
        },
        updateCart({state, rootState}) {
            if (Object.keys(rootState.profile.user).length > 0) {
                if (state.cart.length > 0) {
                    localStorage.setItem('cart_' + rootState.profile.user.name, JSON.stringify(state.cart))
                } else {
                    localStorage.removeItem('cart_' + rootState.profile.user.name)
                }
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
