import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const initStore = () => {
  return {
    products: [],
    cart: {
      totalPrice: 0,
      itemsCount: 0
    },
    selected: {}
  }
}

export default new Vuex.Store({
  state: initStore(),
  getters: {
    getProducts: state => state.products || [],
    getCartItemsCount: state => state.cart.itemsCount,
    getCartTotalPrice: state => state.cart.totalPrice,
    getSelected: state => state.products.find(it => it._id === state.selected)
  },
  mutations: {
    ADD_PRODUCTS (state, payload) {
      state.products = [
        ...state.products,
        ...payload
      ]
    },
    ADD_TO_CART (state, payload) {
      state.cart = {
        itemsCount: state.cart.itemsCount + payload.count,
        totalPrice: state.cart.totalPrice + payload.price
      }
    },
    CHANGE_SELECTED (state, payload) {
      state.selected = payload
    } 
  },
  actions: {
    fetchProducts ({ commit }) {
      return fetch("http://localhost:8090/products")
        .then(response => response.json())
        .then(({ data }) => {
          if (data) {
            commit('ADD_PRODUCTS', data)
          }
        })
        .catch(err => err)
    },
    addToCart ({ commit }, payload) {
      commit('ADD_TO_CART', payload)
    },
    changeSelected ({ commit }, payload) {
      commit('CHANGE_SELECTED', payload)
    }
  }
});
