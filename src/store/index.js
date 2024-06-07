import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('http://localhost:3000/login', credentials);
        const token = response.data.token;
        commit('setToken', token); 
        return true; 
      } catch (error) {
        console.error('Login error:', error);
        return false; 
      }
    }
  }
});