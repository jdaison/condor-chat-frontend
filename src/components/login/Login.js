import { mapActions } from "vuex";

import RULES from "./rules";
export default {
  data: () => ({
    form: {
      user: "",
      password: "",
    },
    rules: RULES,
  }),
  methods: {
    ...mapActions("Login", ["signInAction"]),
  },
};
