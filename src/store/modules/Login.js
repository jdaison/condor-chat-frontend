import { signInApp } from "../../API/login";
import router from "./../../router/";

export default {
  namespaced: true,
  state: {
    successSignIn: "",
  },
  mutations: {
    setSuccessSignIn(state, successSignIn) {
      state.successSignIn = successSignIn;
    },
  },
  actions: {
    async signInAction({ commit }, form) {
      try {
        const data = await signInApp(form);
        const user = {};
        user["token"] = data.token;
        user["user"] = data.response.user;
        if (user.token) {
          console.log(user);
          localStorage.setItem("user", JSON.stringify(user));
          commit("setSuccessSignIn", JSON.stringify(user));
          router.push({ path: "/sidebar" });
        }
      } catch (error) {
        commit("setSuccessSignIn", "Invalid Token");
      }
    },
  },
};
