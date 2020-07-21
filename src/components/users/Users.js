import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      inputUser: "",
    };
  },
  methods: {
    ...mapActions("Users", ["getUsers", "getUserByName"]),
  },
  computed: {
    ...mapGetters("Users", ["getArrayUsers"]),
  },
  created() {
    this.getUsers();
  },
};
