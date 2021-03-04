import { createStore } from 'vuex'

export default createStore({
  state: {
      showHeader: true,
      showFooter: true
  },
  getters: {
      showHeader: (state) => {
          return state.showHeader;
      },
      showFooter: (state) => {
          return state.showFooter;
      }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
