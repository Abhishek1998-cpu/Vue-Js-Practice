// import Vue from "vue";
import Router from "vue-router";
// import VueRouter from "vue-router";
import ForLoopExampleComponent from "../components/ForLoopExampleComponent";
// import HomeComponent from "../components/HomeComponent";
import CounterAppComponent from "../components/CounterAppComponent";
import PageNotFoundComponent from "../components/PageNotFoundComponent";
import DynamicComponent from "../components/DynamicComponent";

const router = new Router({
  mode: "history",
  routes: [
    {
      name: "HomeComponent",
      path: "/",
      //   component: HomeComponent,
      component: DynamicComponent,
    },
    {
      name: "ForLoopExampleComponent",
      path: "/forloopexamplecomponent",
      component: ForLoopExampleComponent,
    },
    {
      name: "CounterAppComponent",
      path: "/counterappcomponent",
      component: CounterAppComponent,
    },
    {
      path: "*",
      component: PageNotFoundComponent,
    },
  ],
});

export default router;
