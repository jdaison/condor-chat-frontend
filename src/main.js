import Vue from "vue";
import * as validatePermission from "../src/utils/validatePermission";
import ElementUI from "element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";
/**service to log errors*/

// import * as Sentry from "@sentry/browser";
// import * as Integrations from "@sentry/integrations";

/**library to import icons from font awsome*/

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faUserSecret} from '@fortawesome/free-solid-svg-icons'
// library.add(faUserSecret)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

// Sentry.init({
//   dsn: "",
//   integrations: [new Integrations.Vue({ Vue, attachProps: true })],
//   environment: process.env.NODE_ENV,
// });

Vue.prototype.$validatePermission = validatePermission.validate;
//**import axios and set headers for authentication*/
import Axios from "axios";
Vue.prototype.$http = Axios;
const user = JSON.parse(localStorage.getItem("user"));
Vue.prototype.$user = user;
const token = user ? user.token : null;
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] =
    "Bearer " + token;
}

function validToken(res) {
  if (res.data.token) {
    Vue.prototype.$http.defaults.headers.common["Authorization"] =
      "Bearer " + res.data.token;
  }
  return res;
}

function handleError(err) {
  const error = err.response.status;
  switch (error) {
    case 401:
      router.push({ path: "/" });
      localStorage.removeItem("user");
      break;
    case 403:
      router.push({ path: "/" });
      localStorage.removeItem("user");
      break;
  }
}

Vue.prototype.$http.interceptors.response.use(validToken, handleError);
Vue.config.productionTip = false;

Vue.use(ElementUI), { size: "small", zIndex: 3000 };

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
