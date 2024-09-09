import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from "@/modules/NotFound.vue"


Vue.use(VueRouter)


/**
 * @desc this function is pull all routes from modules , the .routes extension is required required in route files
 **/
const routesFiles = require.context("../", true, /\.routes.js$/);
const routesModules = routesFiles.keys().reduce((routesModules, routePath) => {
  const value = routesFiles(routePath);
  routesModules.push(value.default);
  return routesModules;
}, []);



const routes = [
  //modules routes
  ...routesModules,
  //fallback route
  {
    path: "*",
    name: "not-found",
    component: NotFound,
    meta: { title: "Page not found" },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
  },
})



//change the title of the browser tab according to route's meta title
const DEFAULT_TITLE = process.env.VUE_APP_PROJECT_NAME;
router.afterEach((to) => {
  // Use next tick to handle router history correctly
  Vue.nextTick(() => {
    if (to.meta.title) document.title = to.meta.title;
    else document.title = DEFAULT_TITLE;
  });
});



router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router
