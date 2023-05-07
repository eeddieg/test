import { createStore } from "vuex";

export default createStore({
  state: {
    username: "",
    password: "",
  },
  getters: {
    username: function (state) {
      return state.username;
    },
    password: function (state) {
      return state.password;
    },
  },
  mutations: {
    setUsername(state, payload) {
      state.username = payload;
    },
    setPassword(state, payload) {
      state.password = payload;
    },
  },
  actions: {
    logUser(content, payload) {
      console.log(payload);
      content.commit("setUsername", payload.userame);
      content.commit("setPassword", payload.password);
    },
  },
  modules: {},
});
