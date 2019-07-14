import Vue from 'vue'
import Vuex from 'vuex'
import { callAPi } from '@/api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    info: {},
    page: 1
  },
  mutations: {
    setPlayers(state, playersAction){
      state.players = playersAction
    },
    setInfo(state, { page, info }){
      state.info = info;
      state.page = page;
      console.log(page)
    }
  },
  actions: {
    getPlayers: async function ({ commit }){
      const data = await callAPi();
      const { results } = await data.json()
      commit('setPlayers', results)
    },
    getPlayersPreviousPage: async function ({ state, commit }) {
      if (state.page > 1) {
        const page = --state.page;
        const data = await callAPi({ page });
        const { results, info } = await data.json()
        commit('setPlayers', results);
        commit('setInfo', { info, page });
      }
    },
    getPlayersNextPage: async function ({ state, commit }) {
      const page = ++state.page;
      const data = await callAPi({ page });
      const { results, info } = await data.json()
      commit('setPlayers', results);
      commit('setInfo', { info, page });
    },
    async getPlayersStatus({commit}, status) {
      const data = await callAPi({ status: status });
      const { results, info } = await data.json()
      commit('setPlayers', results);
      commit('setInfo', { info, page: 1 });
    },
    async getPlayersByGender({commit}, gender) {
      const data = await callAPi({ gender });
      const { results, info } = await data.json()
      commit('setPlayers', results);
      commit('setInfo', { info, page: 1 });
    },
    async searchSinglePlayer({commit}, name ) {
      const data = await callAPi({ name });
      const { results } = await data.json()
      commit('setPlayers', results);
    }

  }

})