import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => state.counter * 2,
    stringCounter: state => state.counter + " clicks"
  },
  mutations: {
    increment: (state, payload) => (state.counter += payload),
    decrement: (state, by) => (state.counter -= by)
  },
  actions: {
    increment: ({ commit }) => {
      commit("increment");
    },
    decrement: ({ commit }) => {
      commit("decrement");
    },
    asyncIncrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit("increment", payload);
      }, 1000);
    },
    asyncDecrement: ({ commit }, { by, duration }) => {
      setTimeout(() => {
        commit("decrement", by);
      }, duration);
    }
  }
});
