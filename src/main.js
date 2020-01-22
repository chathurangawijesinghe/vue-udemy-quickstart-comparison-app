import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import User from "./components/User.vue";
import Blog from "./components/Blog.vue";
import Account from "./components/Account.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/blog", component: Blog },
  { path: "/account", component: Account },
  { path: "/", component: User }
];

const router = new VueRouter({
  routes: routes
});

Vue.config.productionTip = false;

Vue.component("app-user", User);

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
