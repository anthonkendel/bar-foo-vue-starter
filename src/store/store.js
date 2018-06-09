import Vue from 'vue';
import Vuex from 'vuex';
import actions from 'src/store/actions';
import getters from 'src/store/getters';
import mutations from 'src/store/mutations';
import state from 'src/store/state';

Vue.use(Vuex);

const store = new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
});
