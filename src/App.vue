<template>
  <v-app>
    <NavigationBar />
    <v-main class="mx-4 mb-4 grey lighten-5">
      <router-view />
    </v-main>
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
