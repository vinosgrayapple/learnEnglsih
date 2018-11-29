import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contacts from "./views/Contacts.vue";
import Books from "./views/Books.vue";
import Words from "./views/Words.vue";
import Profile from "./views/Profile.vue";
import Signin from "./views/Signin.vue";
import Signup from "./views/Signup.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    },
    {
      path: "/books",
      name: "books",
      component: Books
    },
    {
      path: "/words",
      name: "words",
      component: Words
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    }
  ],
  mode: "history"
});
