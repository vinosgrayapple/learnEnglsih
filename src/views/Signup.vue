<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md5>
        <v-card class="elevation-12">
          <v-toolbar dark color="indigo">
            <v-toolbar-title>Форма Регистрации</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-alert :value="error" type="warning" color="yellow darken-4">{{
            error
          }}</v-alert>
          <v-card-text>
            <v-form>
              <v-text-field
                prepend-icon="person"
                name="email"
                v-model="email"
                label="Логин"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                id="password"
                prepend-icon="lock"
                name="password"
                label="Пароль"
                type="password"
                v-model="password"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="indigo lighten-2" 
            @click.prevent="signUp"
            :disabled="processing"
           
              >
              <v-progress-circular
               v-if="processing"
               indeterminate
                color="grey darken-1"
              />
              <span
              v-if="!processing"
              >
              Зарегестрироваться
              </span>
              </v-btn>
            
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      email: null,
      password: null
    };
  },
  computed: {
    error() {
      return this.$store.getters.getError;
    },
    processing() {
      return this.$store.getters.getProcessing;
    },
    isAuthentificated() {
      return this.$store.getters.isAuthentificated;
    }
  },
  watch: {
    isUserAuthentificated(val) {
      if (val === true) {
        this.$router.push("/");
        this.email = null;
        this.password = null;
        setTimeout(() => {
          this.$store.dispatch("CLEAN_ERROR");
        }, 2000);
      }
    }
  },
  methods: {
    signUp() {
      this.$store.dispatch("SIGNUP", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
</style>
