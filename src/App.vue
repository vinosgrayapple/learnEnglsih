<template>
  <div id="app">
    <app-header></app-header>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text" text-center>&copy; 2018</span>
    </v-footer>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import Vue from "vue";
const eventBus = new Vue();
import AppHeader from "@/components/AppHeader";
export default {
  name: "App",
  components: { /* Home, About, */ AppHeader },

  data: () => {
    return {};
  },
  methods: {}
};
</script>
