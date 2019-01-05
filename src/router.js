import Vue from "vue";
import Router from "vue-router";
import HomeMaterial from "./components/HomeMaterial.vue"
import ScopeMaterial from "./components/ScopeMaterial.vue"
import FormatMaterial from "./components/FormatMaterial.vue"

import AudianceMaterial from "./components/AudianceMaterial.vue"
import BudgetMaterial from "./components/BudgetMaterial.vue"
import ProgramMaterial from "./components/ProgramMaterial.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/scope',
      name: "scope-material",
      component: ScopeMaterial
    },
    {
      path:'/program',
      name: "program-material",
      component: ProgramMaterial
    },
    {
      path:'/budget',
      name: "budget-material",
      component: BudgetMaterial
    },
    {
      path:'/audiance',
      name: "audiance-material",
      component: AudianceMaterial
    },
    {
      path:'/format',
      name: "format-material",
      component: FormatMaterial
    },
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
    {
      path: "/",
      name: "home-material",
      component: HomeMaterial
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function() {
        return import(/* webpackChunkName: "about" */ "./views/About.vue");
      }
    }
  ]
});
