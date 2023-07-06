import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state () {
    return {
      userId: null,
      token: null,
      userName: null,
    }
  },
  mutations: {
    setUserId(state, userId) {
        state.userId = userId
    },
    setToken(state, token) {
        state.token = token
    },
    setUserName(state, userName) {
        state.userName = userName
    }

  },
  plugins: [createPersistedState()],
});

export default store;
