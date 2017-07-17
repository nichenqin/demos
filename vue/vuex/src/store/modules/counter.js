import * as types from "../types";

const state = {
  counter: 0
};

const getters = {
  [types.DOUBLE_COUNTER]: ({ counter }) => counter * 2,
  [types.CLICK_COUNTER]: ({ counter }) => counter + " clicks"
};

const mutations = {
  [types.INCREMENT_COUNTER]: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  }
};

const actions = {
  [types.INCREMENT_COUNTER]: ({ commit }) => {
    commit(types.INCREMENT_COUNTER);
  },
  decrement: ({ commit }) => {
    commit("decrement");
  },
  asyncIncrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit(types.INCREMENT_COUNTER, payload);
    }, 1000);
  },
  asyncDecrement: ({ commit }, { by, duration }) => {
    setTimeout(() => {
      commit("decrement", by);
    }, duration);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
