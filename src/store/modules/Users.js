import { getUsers, getUserByName } from "../../API/users";

export default {
  namespaced: true,
  state: {
    users: [],
    error: "",
    loading: false,
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async getUsers({ commit }) {
      commit("setLoading", true);
      try {
        const users = await getUsers();
        commit("setUsers", users);
      } catch (error) {
        commit("setError", error.toString());
      } finally {
        commit("setLoading", false);
      }
    },
    async getUserByName({ commit }, userName) {
      commit("setLoading", true);
      try {
        const user = await getUserByName(userName);
        const users = [user];
        commit("setUsers", users);
      } catch (error) {
        commit("setError", error.toString());
      } finally {
        commit("setLoading", false);
      }
    },
  },
  getters: {
    getArrayUsers: (state) => state.users,
  },
};
