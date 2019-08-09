import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Posts from "./views/Posts.vue";
import PostNew from "./views/PostNew.vue";
import PostDetail from "./views/PostDetail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/posts",
      component: Posts,
      children: [
        { path: "new", component: PostNew },
        { path: ":id", name: "post", component: PostDetail }
      ]
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
