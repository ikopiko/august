// import axios from '@nuxtjs/axios';
import createPersistedState from 'vuex-persistedstate';
const state = () => ({
    cart: [],
    totalAmount: 0,
    totalQuantity: 0,
    totalFee: 0,
    orders: [],
    locales: ['en', 'ka'],
    locale: 'ka',
    loggedUser: {},
    isAuthentificated: false,
    blogSingle: {},
});

export const plugins = [createPersistedState];

export const totals = (paylodArr) => {
    const totalAmount = paylodArr.map(cartArr => {
        return Number(cartArr.price) * cartArr.quantity
    }).reduce((a, b) => a + b, 0);

    const totalQuantity = paylodArr.map(cartArr => {
        return cartArr.quantity;
    }).reduce((a, b) => a + b, 0);

    return {
        amount: totalAmount.toFixed(2),
        qty: totalQuantity
    }
};
const mutations = {
    'SET_LANG'(state, locale) {
        // if (state.locales.indexOf(locale) !== -1) {
        //     state.locale = locale
        // }
        state.locale = locale
    },
    'SET_USER'(state, user) {
        state.loggedUser = user;
        state.isAuthentificated = true;
    },
    'AUTH_USER'(state) {
        // console.log('AUTH USER', user);
        state.isAuthentificated = true;
    },
    'ADD_SINGLE_BLOG'(state, blogSingle) {
        state.blogSingle = blogSingle
    },
    'LOGOUT_USER'(state) {
        // console.log('LOGOUT USER', user);
        state.isAuthentificated = false;
        state.loggedUser = {};
    },
    'GET_ORDER'(state, payload) {
        state.orders = payload
    },
    'GET_CART'(state, payload) {
        state.cart = payload
        state.totalAmount = totals(payload).amount
        state.totalQuantity = totals(payload).qty
    },
    'ADD_TO_CART'(state, payload) {
        state.cart = [...state.cart, ...payload]
        state.totalAmount = totals(state.cart).amount
        state.totalQuantity = totals(state.cart).qty
    },
    'FEE_TO_TOTAL'(state, payload) {
        state.totalFee = payload;
    },
    'DELETE_CART'(state, id) {
        const currentCartToDelete = state.cart
        const indexToDelete = currentCartToDelete.findIndex(cart => {
            return cart.id == id
        })
        state.cart = [...currentCartToDelete.slice(0, indexToDelete), ...currentCartToDelete.slice(indexToDelete + 1)]
        state.totalAmount = totals(state.cart).amount
        state.totalQuantity = totals(state.cart).qty
    },
    'UPDATE_CART'(state, payload) {
        state.cart = payload

        state.totalAmount = totals(payload).amount
        state.totalQuantity = totals(payload).qty
    },
    'CART_EMPTY'(state) {
        state.cart = []
        state.totalAmount = 0
        state.totalQuantity = 0
    }
};

const actions = {
    // getOrder({commit}){
    //     axios.get('c').then(res => {
    //         if(res.data == 'no data'){
    //             return []
    //         }
    //         commit('GET_ORDER', res.data)
    //     })
    // },
    addBlog({ commit }, payload) {
        commit('ADD_SINGLE_BLOG', payload)
    },
    addToCart({ commit }, payload) {
        commit('ADD_TO_CART', payload)
    },
    setLocale({ commit }, payload) {
        commit('SET_LANG', payload)
    },


    feeAmount({ commit }, payload) {
        commit
    },

    deleteCart({ commit }, id) {
        commit('DELETE_CART', id)
    },

    updateCart({ commit }, payload) {
        // console.log(payload.unit)
        const currentCartToUpdate = payload.cart
        const indexToUpdate = currentCartToUpdate.findIndex(cart => {
            return cart.id == payload.id
        })

        const newCart = {
            ...currentCartToUpdate[indexToUpdate],
            quantity: currentCartToUpdate[indexToUpdate].quantity + payload.unit
        }

        // console.log(newCart)

        const cartUpdate = [...currentCartToUpdate.slice(0, indexToUpdate), newCart, ...currentCartToUpdate.slice(indexToUpdate + 1)]
        commit('UPDATE_CART', cartUpdate)
    },
    cartEmpty({ commit }) {
        commit('CART_EMPTY')
    }
};

const getters = {
    cart(state) {
        return state.cart
    },
    singleBlog(state) {
        return state.blogSingle
    },
    getUser(state) {
        return state.loggedUser
    },
    isAuth(state) {
        return state.isAuthentificated
    },
    language(state) {
        return state.locale
    },
    totalAmount(state) {
        return state.totalAmount
    },
    totalQuantity(state) {
        return state.totalQuantity
    },
    totalFee(state) {
        return state.totalFee
    },
    getOrders(state) {
        return state.orders
    },
    getLang(state) {
        return state.locale
    }
};

export default {
    state, mutations, actions, getters
};