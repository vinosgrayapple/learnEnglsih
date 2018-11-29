<template>
  <div>
    <v-navigation-drawer v-model="drawer" app absolute temporary>
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action> <v-icon>home</v-icon> </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/contacts">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/about">
          <v-list-tile-action>
            <v-icon>assignment_ind</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="drawerRight"
      absolute
      temporary
      right
      clipped
      app
    >
      <v-list dense>
        <v-list-tile
          v-for="(item, index) in menuItems"
          :key="`drawer-right-${item.icon}-${index}`"
          :to="item.route"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon
        @click.stop="drawer = !drawer;"
      ></v-toolbar-side-icon>
      <router-link to="/" tag="span" style="cursor:pointer">
        <v-toolbar-title>Learn English</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn
        flat
        dark
        v-for="(item, index) in menuItems"
        :key="`${index}-${item.icon}`"
        :to="item.route"
        :title="item.title"
        class="hidden-sm-and-down"
      >
        <v-icon left v-html="item.icon"></v-icon>
        {{ item.title }}
      </v-btn>
      <v-btn
        icon
        @click.stop="drawerRight = !drawerRight;"
        class="hidden-md-and-up"
      >
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  methods: {},
  data: () => {
    return {
      drawerRight: null,
      drawer: null
    };
  },
  computed: {
    menuItems() {
      return [
        {
          icon: "library_books",
          title: "Читать",
          route: "/books"
        },
        {
          icon: "swap_horizontal_circle",
          title: "Учить слова",
          route: "/words"
        },
        {
          icon: "account_circle",
          title: "Мой кабинет",
          route: "/profile"
        },
        {
          icon: "exit_to_app",
          title: "Выйти",
          route: "/logout"
        },
        {
          icon: "input",
          title: "Войти",
          route: "/signin"
        },
        {
          icon: "lock",
          title: "Регистрация",
          route: "/signup"
        }
      ];
    }
  }
};
</script>

<style scoped></style>
