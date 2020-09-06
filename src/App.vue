<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <div style="font-size: 35px; font-weight: bold; color: #75b2ff; margin-right: -3px;">
          R
        </div>
        <div style="font-size: 35px; font-weight: bold; color: #a5cdff; margin-right: 20px;">
          P
        </div>

        
        <div style="font-size: 20px; color: #3f3f3f; color: white;">
          To Do List
        </div>
      </div>

      <v-spacer></v-spacer>

      <MyLinks />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MyLinks from './components/MyLinks';
import { mapActions } from "vuex"

export default {
  name: 'App',

  components: {
    MyLinks,
  },

  mounted() {
    this.getToDoList()
  },

  methods: {
      ...mapActions(["getToDoList"]),
  }
};
</script>

<style>
@import "assets/styles/global.css"
</style>
