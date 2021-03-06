import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Movies from './views/Movies.vue';
import MoviesIndex from './views/MoviesIndex.vue';
import MoviesNew from './views/MoviesNew.vue';
import MoviesShow from './views/MoviesShow.vue';
import MoviesEdit from './views/MoviesEdit.vue';
import ActorsIndex from './views/Actors/Index.vue';
import ActorsShow from './views/Actors/Show.vue';
import ActorsEdit from './views/Actors/Edit.vue';
import ActorsNew from './views/Actors/New.vue';
import Signup from "./views/Users/Signup.vue";
import Login from "./views/Users/Login.vue";
import Logout from "./views/Users/Logout.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/movies',
      name: 'movies',
      component: Movies
    },
    {
      path: '/movies-index',
      name: 'movies-index',
      component: MoviesIndex
    },
    {
      path: '/movies/new',
      name: 'movies-new',
      component: MoviesNew
    },
    {
      path: '/movies/:id',
      name: 'movies-show',
      component: MoviesShow
    },
    {
      path: '/movies/:id/edit',
      name: 'movies-edit',
      component: MoviesEdit
    },
    {
      path: '/actors-index',
      name: 'actors-index',
      component: ActorsIndex
    },
    {
      path: '/actors/new',
      name: 'actors-new',
      component: ActorsNew
    },
    {
      path: '/actors/:id',
      name: 'actors-show',
      component: ActorsShow
    },
    {
      path: '/actors/:id/edit',
      name: 'actors-edit',
      component: ActorsEdit
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    }
  ]
});
