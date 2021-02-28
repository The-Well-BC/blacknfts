import { createStore } from 'vuex'

export default createStore({
  state: {
      showHeader: true
  },
  getters: {
      showHeader: (state) => {
          return state.showHeader;
      }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
