<template>
  <v-app id="app">
    <router-view></router-view>
    <span><NavigationBar></NavigationBar></span>
  </v-app>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>
